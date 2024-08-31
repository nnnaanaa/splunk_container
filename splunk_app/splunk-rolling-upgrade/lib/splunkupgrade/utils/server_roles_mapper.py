import logging
from typing import List

from splunkupgrade.data.data_parse_exception import DataParseException
from splunkupgrade.data.server_roles import ServerRole

logger = logging.getLogger(__name__)


class ServerRolesMapper:
    def __init__(self, roles: List[str]):
        if roles is None:
            raise DataParseException("Invalid server roles: None was specified")
        self._parsed_roles = self._parse_roles(roles)
        logger.debug(f"Parsed the following roles='{self._parsed_roles}' from input='{roles}'")

    def _parse_roles(self, roles: List[str]):
        role_values = [role_as_enum.value for role_as_enum in ServerRole]
        return [ServerRole(role) for role in roles if role in role_values]

    # TODO: not used for now, but still this is only a way to show that a CM is a specialization of
    #       of a SH (in terms of roles).
    def is_cluster_master(self) -> bool:
        return ServerRole.CLUSTER_MASTER in self._parsed_roles

    # While a deployer can have multiple roles, we are only interested into ServerRole.SHC_DEPLOYER.
    # Other existing (supported) roles will be skipped. This means, as part of our parsing, a "good"
    # deployer should only have a single parsed ServerRole.
    def is_deployer_only(self) -> bool:
        return len(self._parsed_roles) == 1 and self._parsed_roles[0] == ServerRole.SHC_DEPLOYER

    def is_standalone_search_head(self) -> bool:
        return len(self._parsed_roles) == 1 and self._parsed_roles[0] == ServerRole.SEARCH_HEAD

    # A typical peer in a SHC has always either ServerRole.SHC_CAPTAIN or ServerRole.SHC_MEMBER role.
    # Additionally, it can have ServerRole.SEARCH_HEAD role.
    def is_shc_peer(self) -> bool:
        return any(
            role in self._parsed_roles for role in [ServerRole.SHC_CAPTAIN, ServerRole.SHC_MEMBER]
        )

    def is_search_head_for_indexer_cluster(self) -> bool:
        return ServerRole.CLUSTER_SEARCH_HEAD in self._parsed_roles
