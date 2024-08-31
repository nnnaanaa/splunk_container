import copy
import json
import logging
from typing import Any, Callable, List, Optional

import splunklib.client as client
from splunklib.binding import ResponseReader, handler
from splunklib.client import Service

from splunkupgrade.data.data_parse_exception import DataParseException
from splunkupgrade.data.encoder import JsonWithEnumsEncoder
from splunkupgrade.data.initiate_upgrade_response import (
    to_finalize_upgrade_response,
    to_initiate_upgrade_response,
)
from splunkupgrade.data.kv_store_status import KvStoreStatus, to_kv_store_status
from splunkupgrade.data.kv_upgrade_progress import (
    KvUpgradeProgress,
    to_kv_upgrade_progress,
)
from splunkupgrade.data.parsing import get
from splunkupgrade.data.proxy_nodes import ProxyNode, to_proxy_node_list
from splunkupgrade.data.searchhead_generation import SearchheadGeneration, to_searchhead_generation
from splunkupgrade.data.server_info import ServerInfo, to_server_info
from splunkupgrade.data.server_roles import to_server_roles
from splunkupgrade.data.shc_member_info import ShcMemberInfo, to_shc_member_info
from splunkupgrade.data.shc_status import ShcStatus, to_shc_status
from splunkupgrade.data.upgrade_endpoints_response import (
    to_upgrade_endpoints_response,
    UpgradeEndpointsResponse,
)
from splunkupgrade.utils.app_conf import RequestConfig
from splunkupgrade.utils.constants import (
    GeneralConstants,
    KvStoreUpgradeRecordKeys,
    ShcManualDetectionMode,
)
from splunkupgrade.utils.types import JsonObject
from splunkupgrade.utils.utils import does_path_exist

logger = logging.getLogger(__name__)

SHCLUSTER_STATUS_REST = "/services/shcluster/status"
SHCLUSTER_MEMBER_INFO = "/services/shcluster/member/info"
SHCLUSTER_SET_MANUAL_DETENTION = "/services/shcluster/member/control/control/set_manual_detention"
KVSTORE_STATUS_REST = "/services/kvstore/status"
SERVER_ROLES_REST = "/services/server/roles"
UPGRADE_INIT = "/services/shcluster/captain/control/control/upgrade-init"
UPGRADE_FINALIZE = "/services/shcluster/captain/control/control/upgrade-finalize"
PROXY_NODES_REST = "/services/remote-proxy/nodes"
UPGRADE_SHC_MEMBER_PROXY = "/services/remote-proxy/upgrade/shc/member_upgrade_internal"
UPGRADE_SHC_MEMBER = "/services/upgrade/shc/member_upgrade_internal"
SERVER_INFO_REST = "/services/server/info"
SEARCHHEAD_GENERATION_REST = "/services/cluster/searchhead/generation"


class SplunkServiceException(Exception):
    pass


def find_proxy_to_by_servername(proxy_nodes: List[ProxyNode], servername: str) -> str:
    node = next((x for x in proxy_nodes if x.servername == servername), None)
    if not node:
        raise SplunkServiceException(f"No proxy node was found for servername='{servername}'")
    return node.proxy_to


class SplunkService:
    def __init__(self, host: str, port: int, session_key: str, config: RequestConfig):
        try:
            self.service = SplunkService._create_service(host, port, session_key, config)
        except Exception as e:
            raise SplunkServiceException(
                f"Failed to connect to host='{host}', port='{port}' when creating a splunk service: error='{e}'"
            )

    @staticmethod
    def _create_service(host: str, port: int, session_key: str, config: RequestConfig) -> Service:
        return client.connect(
            host=host,
            port=port,
            token=session_key,
            app=GeneralConstants.APP_NAME,
            handler=handler(
                key_file=None, cert_file=None, timeout=config.timeout, verify=False, context=None
            ),
            retries=config.retries,
            retryDelay=config.retry_delay,
        )

    @staticmethod
    def _get_json_response(response_reader: ResponseReader) -> JsonObject:
        try:
            string_response = response_reader.body.read()
            return json.loads(string_response)
        except Exception as e:
            raise SplunkServiceException(f"Failed to get response content: {e}")

    @staticmethod
    def _get_entry_content_json_response(
        response_reader: ResponseReader,
    ) -> List[JsonObject]:
        json_response = SplunkService._get_json_response(response_reader)
        try:
            entry = get(json_response, "entry", list)
            return [get(element, "content", dict) for element in entry]
        except DataParseException as e:
            raise SplunkServiceException(
                f"Failed to get response content, [entry][<index>][content] path does not exist"
            ) from e

    @staticmethod
    def _get_entry_json_response(response_reader: ResponseReader) -> JsonObject:
        json_response = SplunkService._get_json_response(response_reader)
        if not does_path_exist(json_response, "entry"):
            raise SplunkServiceException(
                f"Failed to get response content, [entry] path does not exist"
            )
        return json_response["entry"]

    @staticmethod
    def _json_to_object(json_dict: JsonObject, parse_method: Callable[[JsonObject], Any]) -> Any:
        try:
            parsed_object = parse_method(json_dict)
        except DataParseException as e:
            raise SplunkServiceException(f"Failed to parse response content: {e}") from e
        return parsed_object

    @staticmethod
    def _list_response_to_object(
        json_list: List[JsonObject], parse_method: Callable[[JsonObject], Any]
    ) -> Any:
        if len(json_list) != 1:
            logger.error(f"Expected to see only one elements in the json, got {len(json_list)}")
        return SplunkService._json_to_object(json_list[0], parse_method)

    @staticmethod
    def _list_response_to_object_list(
        json_list: List[JsonObject], parse_method: Callable[[JsonObject], Any]
    ) -> List[Any]:
        return [SplunkService._json_to_object(element, parse_method) for element in json_list]

    def _call(self, endpoint: str, **kwargs) -> ResponseReader:
        logger.info(f"Calling {endpoint} with arguments={kwargs}")
        try:
            return self.service.get(endpoint, output_mode="json", **kwargs)
        except Exception as e:
            raise SplunkServiceException(
                f"Failed to get response from endpoint='{endpoint}': error='{e}'"
            ) from e

    def _shcluster_set_manual_detention_mode(self, mode: ShcManualDetectionMode) -> None:
        logger.info(f"Setting manual detention mode to '{mode}'")
        response_reader = self._call(SHCLUSTER_SET_MANUAL_DETENTION, manual_detention=mode.value)
        logger.info(
            f"Set manual detention mode response='{SplunkService._get_entry_json_response(response_reader)}'"
        )

    def get_shcluster_info(self) -> ShcStatus:
        logger.info("Getting SHCluster status")
        response_reader = self._call(SHCLUSTER_STATUS_REST, advanced=1)
        json_response = SplunkService._get_entry_content_json_response(response_reader)
        logger.info(f"SHCluster status response='{json_response}'")
        return SplunkService._list_response_to_object(json_response, to_shc_status)

    def get_shcluster_member_info(self) -> ShcMemberInfo:
        logger.info("Getting SHCluster member info")
        response_reader = self._call(SHCLUSTER_MEMBER_INFO)
        json_response = SplunkService._get_entry_content_json_response(response_reader)
        logger.info(f"SHCluster member info response='{json_response}'")
        return SplunkService._list_response_to_object(json_response, to_shc_member_info)

    def get_kv_store_status(self) -> KvStoreStatus:
        logger.info("Getting kv store status")
        response_reader = self._call(KVSTORE_STATUS_REST)
        json_response = SplunkService._get_entry_content_json_response(response_reader)
        logger.info(f"Kv store status response='{json_response}'")
        return SplunkService._list_response_to_object(json_response, to_kv_store_status)

    def get_server_roles(self) -> List[str]:
        logger.info("Getting server roles")
        response_reader = self._call(SERVER_ROLES_REST)
        json_response = SplunkService._get_entry_content_json_response(response_reader)
        logger.info(f"Server roles response='{json_response}'")
        return SplunkService._list_response_to_object(json_response, to_server_roles)

    def get_host_name(self) -> str:
        return self.service.host

    def get_latest_upgrade(self) -> Optional[KvUpgradeProgress]:
        logger.info("Getting latest upgrade")
        try:
            data = self.service.kvstore[GeneralConstants.COLLECTION_NAME].data
            latest_upgrade = data.query(limit=1, sort=f"{KvStoreUpgradeRecordKeys.ID}:-1")
            logger.info(f"Latest upgrade='{latest_upgrade}'")
            if latest_upgrade:
                return SplunkService._json_to_object(latest_upgrade[0], to_kv_upgrade_progress)
            return None
        except Exception as e:
            raise SplunkServiceException(f"Failed to query the kv store: {e}")

    def add_upgrade_progress(self, upgrade_data: KvUpgradeProgress) -> KvUpgradeProgress:
        logger.info(f"Adding new upgrade record='{upgrade_data}'")
        if upgrade_data.get_key():
            raise SplunkServiceException("Upgrade record has _key field set")
        try:
            data_copy = copy.deepcopy(upgrade_data)
            del data_copy._key
            data_copy._key = self.service.kvstore[GeneralConstants.COLLECTION_NAME].data.insert(
                JsonWithEnumsEncoder().encode(data_copy)
            )
            return data_copy
        except Exception as e:
            raise SplunkServiceException(f"Failed to push new upgrade record to the kv store: {e}")

    def update_upgrade_progress(self, upgrade_data: KvUpgradeProgress) -> None:
        logger.info(f"Updating upgrade record='{upgrade_data}'")
        try:
            self.service.kvstore[GeneralConstants.COLLECTION_NAME].data.update(
                upgrade_data.get_key(),
                JsonWithEnumsEncoder().encode(upgrade_data),
            )
        except Exception as e:
            raise SplunkServiceException(f"Failed to update upgrade record: {e}")

    def initiate_upgrade(self) -> bool:
        logger.info("Initiating the SHC upgrade")
        response_reader = self._call(UPGRADE_INIT)
        json_response = SplunkService._get_entry_content_json_response(response_reader)
        logger.info(f"Initiate SHC upgrade response='{json_response}'")
        return SplunkService._list_response_to_object(json_response, to_initiate_upgrade_response)

    def finalize_upgrade(self) -> bool:
        logger.info("Finalizing the SHC upgrade")
        response_reader = self._call(UPGRADE_FINALIZE)
        json_response = SplunkService._get_entry_content_json_response(response_reader)
        logger.info(f"Finalize SHC upgrade response='{json_response}'")
        return SplunkService._list_response_to_object(json_response, to_finalize_upgrade_response)

    def get_proxy_nodes(self) -> List[ProxyNode]:
        logger.info("Getting available proxy nodes")
        response_reader = self._call(PROXY_NODES_REST)
        json_response = SplunkService._get_json_response(response_reader)
        logger.info(f"Proxy nodes response='{json_response}'")
        return SplunkService._json_to_object(json_response, to_proxy_node_list)

    def upgrade_shc_member(self, proxy_to: Optional[str] = None) -> UpgradeEndpointsResponse:
        logger.info(f"Upgrading SHC member with proxy='{proxy_to}'")
        if proxy_to is None:
            response_reader = self._call(UPGRADE_SHC_MEMBER)
        else:
            response_reader = self._call(UPGRADE_SHC_MEMBER_PROXY, proxy_to=proxy_to)
        json_response = SplunkService._get_entry_content_json_response(response_reader)
        logger.info(f"Upgrade SHC member response='{json_response}'")
        return SplunkService._list_response_to_object(json_response, to_upgrade_endpoints_response)

    def upgrade_shc_member_by_name(self, name: str) -> UpgradeEndpointsResponse:
        logger.info(f"Upgrading SHC member with name='{name}'")
        proxy_nodes = self.get_proxy_nodes()
        proxy_to = find_proxy_to_by_servername(proxy_nodes, name)
        return self.upgrade_shc_member(proxy_to)

    def set_shcluster_enable_detention_mode(self) -> None:
        self._shcluster_set_manual_detention_mode(ShcManualDetectionMode.ON)

    def set_shcluster_disable_detention_mode(self) -> None:
        self._shcluster_set_manual_detention_mode(ShcManualDetectionMode.OFF)

    def get_server_info(self) -> ServerInfo:
        logger.info("Getting server info")
        response_reader = self._call(SERVER_INFO_REST)
        json_response = SplunkService._get_entry_content_json_response(response_reader)
        logger.info(f"Server info response='{json_response}'")
        return SplunkService._list_response_to_object(json_response, to_server_info)

    def get_searchhead_generation(self) -> List[SearchheadGeneration]:
        logger.info("Getting searchhead generation")
        response_reader = self._call(SEARCHHEAD_GENERATION_REST)
        json_response = SplunkService._get_entry_content_json_response(response_reader)
        logger.info(f"Searchhead generation response='{json_response}'")
        return SplunkService._list_response_to_object_list(json_response, to_searchhead_generation)
