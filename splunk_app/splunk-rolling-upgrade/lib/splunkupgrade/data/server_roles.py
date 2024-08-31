import logging
from enum import Enum
from typing import List

from splunkupgrade.data.data_parse_exception import DataParseException
from splunkupgrade.data.parsing import get
from splunkupgrade.utils.constants import ServerRolesKeys
from splunkupgrade.utils.types import JsonObject

logger = logging.getLogger(__name__)


"""
NOTE: This is what we get from /services/server/info when getting a server roles.
How to create: orca create --sh 3 --shc --idx 2 --idc --splunk-version 9.0.0
SH:  license_master, license_manager, cluster_search_head, search_head, kv_store, shc_captain
     license_master, license_manager, cluster_search_head, search_head, kv_store, shc_member
CM:  license_master, license_manager, cluster_master, cluster_manager, search_head, kv_store
IDX: indexer, license_master, license_manager, cluster_slave, cluster_peer, search_peer, kv_store
DPL: license_master, license_manager, kv_store, shc_deployer

How to create: orca create --sh 1 --idx 1 --splunk-version 9.0.0
SH:  license_master, license_manager, search_head, kv_store
IDX: indexer, license_master, license_manager, kv_store

How to create: orca create --sh 3 --shc --idx 1 --splunk-version 9.0.0
SH:  license_master, license_manager, search_head, kv_store, shc_captain
     license_master, license_manager, search_head, kv_store, shc_member
IDX: indexer, license_master, license_manager, kv_store
DPL: license_master, license_manager, kv_store, shc_deployer

"""


class ServerRole(Enum):
    SEARCH_HEAD = "search_head"
    SHC_MEMBER = "shc_member"
    SHC_CAPTAIN = "shc_captain"
    SHC_DEPLOYER = "shc_deployer"
    CLUSTER_MASTER = "cluster_master"
    CLUSTER_SEARCH_HEAD = "cluster_search_head"


def to_server_roles(json_status: JsonObject) -> List[str]:
    roles = get(json_status, ServerRolesKeys.ROLE_LIST, list)
    if not all(isinstance(role, str) for role in roles):
        msg = f"Roles are supposed to be strings, but have a different type='{roles}'"
        logger.error(msg)
        raise DataParseException(msg)
    return roles
