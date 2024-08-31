from splunkupgrade.data.parsing import get
from splunkupgrade.utils.constants import InitiateUpgradeResponseKeys
from splunkupgrade.utils.types import JsonObject


def to_initiate_upgrade_response(json_response: JsonObject) -> bool:
    return get(json_response, InitiateUpgradeResponseKeys.SUCCESS, bool)


def to_finalize_upgrade_response(json_response: JsonObject) -> bool:
    return get(json_response, InitiateUpgradeResponseKeys.SUCCESS, bool)
