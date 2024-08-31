import logging
import os.path
import sys
from subprocess import DEVNULL, Popen
from typing import Optional
from http import HTTPStatus

from splunkupgrade.data.kv_upgrade_progress_peer import KvUpgradePeerStep
from splunkupgrade.data.upgrade_endpoints_response import GenericResponse
from splunkupgrade.processors.common import (
    get_auth_token,
    get_rest_uri,
    get_servername,
    create_generic_response_with_message_and_status,
)
from splunkupgrade.processors.base_processor import RestProcessorBase
from splunkupgrade.upgrader.upgrader_utils import try_fail_upgrade, StatusUpdater
from splunkupgrade.utils.constants import GeneralConstants
from splunkupgrade.utils.logger_utils import log_handling_exception
from splunkupgrade.utils.types import JsonObject

logger = logging.getLogger(__name__)


class ShcUpgradeMemberRestProcessor(RestProcessorBase):
    def __init__(self, upgrader_path: Optional[str] = None):
        super().__init__("/upgrade/shc/member_upgrade_internal")
        self._upgrader_path = upgrader_path

    def _do_process(self, request: JsonObject) -> GenericResponse:
        # this assert is here to make mypy happy
        assert self._splunk_service

        servername = get_servername(request)
        token = get_auth_token(request)
        uri = get_rest_uri(request)
        if GeneralConstants.SPLUNK_HOME not in os.environ:
            message = "SPLUNK_HOME environmental variable is not set"
            logger.error(message)
            return self._get_message_response(HTTPStatus.SERVICE_UNAVAILABLE, message)
        if not self._upgrader_path:
            self._upgrader_path = os.path.join(
                os.environ[GeneralConstants.SPLUNK_HOME], GeneralConstants.UPGRADER_RELATIVE_PATH
            )
        if not os.path.isfile(self._upgrader_path):
            logger.error(f"Path='{self._upgrader_path}' does not exist")
            return self._get_message_response(
                HTTPStatus.SERVICE_UNAVAILABLE, "Upgrader script does not exist"
            )

        status_updater = StatusUpdater(self._splunk_service)
        status_updater.update_peer_status_to(servername, KvUpgradePeerStep.RUNNING_UPGRADE_PROCESS)
        cmd = [
            sys.executable,
            self._upgrader_path,
            "--peer_name",
            servername,
            "--rest_uri",
            uri,
            "--session_key",
            token,
        ]
        logger.info(f"Running script='{self._upgrader_path}'")
        try:
            proc = Popen(cmd, stdin=DEVNULL, stdout=DEVNULL, stderr=DEVNULL, close_fds=True)
        except OSError as e:
            logger.error(f"Failed to create process: {e}")
            return self._get_message_response(
                HTTPStatus.SERVICE_UNAVAILABLE, "Failed to create upgrader process"
            )
        return self._get_message_response(
            HTTPStatus.OK, f"Member='{servername}' upgrade initiated. Pid='{proc.pid}'"
        )

    def _get_message_response(self, http_status: int, message: str) -> GenericResponse:
        return create_generic_response_with_message_and_status(http_status, message)

    def _process(self, request: JsonObject) -> GenericResponse:
        try:
            response = self._do_process(request)
        except Exception as e:
            log_handling_exception(logger, e)
            response = self._get_message_response(
                HTTPStatus.INTERNAL_SERVER_ERROR, "Internal error"
            )
        if response.status_code != HTTPStatus.OK and self._splunk_service:
            try_fail_upgrade(self._splunk_service)
        return response
