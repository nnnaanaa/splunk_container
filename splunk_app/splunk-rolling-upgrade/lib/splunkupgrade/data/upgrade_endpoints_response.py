from dataclasses import dataclass
from enum import Enum
from http import HTTPStatus

from splunkupgrade.data.parsing import get, to_enum_throws
from splunkupgrade.utils.constants import UpgradeEnpointsResponseKeys
from splunkupgrade.utils.types import JsonObject


class EndpointResponseStatus(Enum):
    SUCCEEDED = "succeeded"
    FAILED = "failed"


@dataclass
class UpgradeEndpointsResponse:
    message: str
    status: EndpointResponseStatus


@dataclass
class GenericResponse:
    status_code: int
    content: JsonObject


def to_upgrade_endpoints_response(json_node: JsonObject) -> UpgradeEndpointsResponse:
    return UpgradeEndpointsResponse(
        get(json_node, UpgradeEnpointsResponseKeys.MESSAGE, str),
        to_enum_throws(
            EndpointResponseStatus, get(json_node, UpgradeEnpointsResponseKeys.STATUS, str)
        ),
    )


@dataclass
class UpgradeShcStatusResponse:
    message: dict


def to_upgrade_shc_status_endpoints_response(json_node: JsonObject) -> UpgradeShcStatusResponse:
    return UpgradeShcStatusResponse(
        get(json_node, UpgradeEnpointsResponseKeys.MESSAGE, dict),
    )
