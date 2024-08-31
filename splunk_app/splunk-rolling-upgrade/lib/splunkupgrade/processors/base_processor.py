import abc
import json
import logging
import os

from enum import Enum

from splunk.rest.format import primitiveToAtomFeed
from typing import Optional
from http import HTTPStatus
from splunkupgrade.data.parsing import to_enum_throws, DataParseException
from splunkupgrade.data.upgrade_endpoints_response import GenericResponse
from splunkupgrade.processors.common import create_service_from_json_request
from splunkupgrade.utils.app_conf import RollingUpgradeConfig
from splunkupgrade.utils.constants import GeneralConstants
from splunkupgrade.utils.splunk_service import SplunkService
from splunkupgrade.utils.exceptions import ConfigurationError
from splunkupgrade.utils.types import JsonObject
from splunkupgrade.utils.utils import is_supported_platform


logger = logging.getLogger(__name__)


class InvalidEndpointParameter(Exception):
    pass


class OutputMode(Enum):
    JSON = "json"
    XML = "xml"


def get_output_mode(parameters: dict) -> OutputMode:
    str_output_mode = parameters.get(GeneralConstants.OUTPUT_MODE, "xml")
    try:
        return to_enum_throws(OutputMode, str_output_mode)
    except DataParseException as e:
        raise InvalidEndpointParameter(f"Invalid output mode specified '{str_output_mode}'.") from e


class RestProcessorBase(metaclass=abc.ABCMeta):
    def __init__(self, rest_path: str):
        self._rest_path = rest_path
        self._splunk_service: Optional[SplunkService] = None
        self._config: Optional[RollingUpgradeConfig] = None
        self._output_mode = OutputMode.XML

    @abc.abstractmethod
    def _process(self, request: JsonObject) -> GenericResponse:
        pass

    @abc.abstractmethod
    def _get_message_response(self, http_status: int, message: str) -> GenericResponse:
        pass

    def _pre_process(self, in_request: bytes) -> JsonObject:
        request = json.loads(in_request)
        self._output_mode = get_output_mode(request)
        self._config = RollingUpgradeConfig()
        self._splunk_service = create_service_from_json_request(
            request, self._config.requests_timeout_config
        )
        return request

    def format_response(self, response: GenericResponse) -> JsonObject:
        head, tail = os.path.split(self._rest_path)
        content = {tail: response.content}
        feed = primitiveToAtomFeed("/services/upgrade/", "shc", content)
        if self._output_mode == OutputMode.XML:
            content = feed.toXml()
        else:
            content = feed.asJsonStruct()
        return {"payload": content, "status": response.status_code}

    def handle(self, in_request: bytes) -> JsonObject:
        logger.info(f"Running {self._rest_path} pid='{os.getpid()}'")
        try:
            json_request = self._pre_process(in_request)
            if not is_supported_platform():
                return self.format_response(
                    self._get_message_response(HTTPStatus.BAD_REQUEST, "Unsupported platform")
                )
            generic_response = self._process(json_request)
        except InvalidEndpointParameter as e:
            logger.error(str(e))
            generic_response = self._get_message_response(HTTPStatus.BAD_REQUEST, str(e))
        except ConfigurationError as e:
            msg = f"Configuration error: {e}"
            logger.error(msg)
            generic_response = self._get_message_response(HTTPStatus.BAD_REQUEST, msg)
        except Exception as e:
            logger.error(f"Uncaught exception during processing {e}")
            generic_response = self._get_message_response(
                HTTPStatus.INTERNAL_SERVER_ERROR, "Internal error"
            )
        return self.format_response(generic_response)
