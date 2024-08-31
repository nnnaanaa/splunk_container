import logging
from http import HTTPStatus
from splunkupgrade.data.kv_upgrade_progress import to_upgrade_shc_status_response
from splunkupgrade.data.kv_store_status import KvStoreStatus
from splunkupgrade.data.upgrade_endpoints_response import GenericResponse
from splunkupgrade.processors.base_processor import RestProcessorBase
from splunkupgrade.processors.common import create_generic_response_with_message
from splunkupgrade.upgrader.upgrader_utils import is_peer_upgradable
from splunkupgrade.utils.constants import SHC_UPGRADE_NOT_SUPPORTED_PEER
from splunkupgrade.utils.server_roles_mapper import ServerRolesMapper
from splunkupgrade.utils.types import JsonObject


logger = logging.getLogger(__name__)


class ShcUpgradeStatusRestProcessor(RestProcessorBase):
    def __init__(self):
        super().__init__("/upgrade/shc/status")

    def _get_message_response(self, http_status: int, message: str) -> GenericResponse:
        return create_generic_response_with_message(message, http_status)

    def _process(self, request: JsonObject) -> GenericResponse:
        # this assert is here to make mypy happy
        assert self._config and self._splunk_service
        role_mapper = ServerRolesMapper(self._splunk_service.get_server_roles())
        if not is_peer_upgradable(role_mapper):
            return self._get_message_response(
                HTTPStatus.NOT_IMPLEMENTED, SHC_UPGRADE_NOT_SUPPORTED_PEER
            )

        kv_store_status = self._splunk_service.get_kv_store_status()
        if kv_store_status != KvStoreStatus.READY:
            return self._get_message_response(
                HTTPStatus.SERVICE_UNAVAILABLE, "Can't read upgrade status. Kv store is not ready."
            )
        latest_upgrade = self._splunk_service.get_latest_upgrade()
        if latest_upgrade is None:
            logger.info("No upgrade records exist in kv store")
            return GenericResponse(HTTPStatus.OK, to_upgrade_shc_status_response(None))
        return GenericResponse(HTTPStatus.OK, to_upgrade_shc_status_response(latest_upgrade))
