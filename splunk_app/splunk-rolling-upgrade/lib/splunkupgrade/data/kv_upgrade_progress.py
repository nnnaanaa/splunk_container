from dataclasses import dataclass
from datetime import datetime
from enum import Enum
from typing import Dict, List, Optional

from splunkupgrade.data.kv_upgrade_progress_peer import (
    KvUpgradePeerStep,
    KvUpgradeProgressPeer,
    to_kv_upgrade_progress_peer,
)
from splunkupgrade.data.parsing import get, to_enum, to_object_list
from splunkupgrade.data.server_info import to_version
from splunkupgrade.utils.constants import (
    KvStoreUpgradeRecordKeys,
    UPGRADE_SHC_STATUS_DATETIME_FORMAT,
    UpgradeShcStatusResponseOverallStatus as UpgradeStatus,
    UpgradeShcStatusResponsePeers as Peers,
    UpgradeShcStatusResponseStats as Stats,
    UpgradeShcStatusKeys,
)
from splunkupgrade.utils.types import JsonObject


class SummaryKvUpgradeProgress(Enum):
    IN_PROGRESS = "in_progress"
    FAILED = "failed"
    COMPLETED = "completed"
    UNKNOWN = "unknown"


@dataclass
class KvUpgradeProgress:
    status: SummaryKvUpgradeProgress
    id: int
    peers: List[KvUpgradeProgressPeer]
    from_version: str
    to_version: str
    _key: Optional[str] = None

    def get_key(self):
        return self._key


def to_kv_upgrade_progress(
    json_upgrade_progress: JsonObject,
) -> KvUpgradeProgress:
    return KvUpgradeProgress(
        to_enum(
            SummaryKvUpgradeProgress,
            get(json_upgrade_progress, KvStoreUpgradeRecordKeys.STATUS, str),
            SummaryKvUpgradeProgress.UNKNOWN,
        ),
        get(json_upgrade_progress, KvStoreUpgradeRecordKeys.ID, int),
        to_object_list(
            get(json_upgrade_progress, KvStoreUpgradeRecordKeys.PEERS, list),
            to_kv_upgrade_progress_peer,
        ),
        get(json_upgrade_progress, KvStoreUpgradeRecordKeys.FROM_VERSION, str),
        get(json_upgrade_progress, KvStoreUpgradeRecordKeys.TO_VERSION, str),
        get(json_upgrade_progress, KvStoreUpgradeRecordKeys.KEY, str),
    )


@dataclass
class PeerStatus:
    name: str
    status: str
    last_modified: str

    @classmethod
    def from_upgrade_progress_peer(cls, peer: KvUpgradeProgressPeer):
        timestamp_as_date = datetime.fromtimestamp(peer.timestamp).strftime(
            UPGRADE_SHC_STATUS_DATETIME_FORMAT
        )
        return PeerStatus(peer.name, str(peer.status.value), timestamp_as_date)

    @classmethod
    def from_dict(cls, input_dict: Dict):
        return PeerStatus(input_dict[Peers.NAME], input_dict[Peers.STATUS], input_dict[Peers.DATE])


class UpgradeShcStatusResponse:
    def __init__(self, status: Optional[KvUpgradeProgress]):
        self._status = status
        self._response: Dict = dict()

    def _format_peer_list(self):
        if self._status:
            peers = [PeerStatus.from_upgrade_progress_peer(p) for p in self._status.peers]
            peers_as_list_of_dict = [
                {Peers.NAME: p.name, Peers.STATUS: p.status, Peers.DATE: p.last_modified}
                for p in peers
            ]
        else:
            peers_as_list_of_dict = []
        self._response[Peers.KEY] = peers_as_list_of_dict

    def _format_statistics(self):
        def total_upgraded_peers(peers: List[KvUpgradeProgressPeer]) -> int:
            upgraded_peers = [peer for peer in peers if peer.status == KvUpgradePeerStep.UPGRADED]
            return len(upgraded_peers)

        def total_upgraded_peers_perc(total_peers: int, total_upgraded_peers: int) -> int:
            return int(total_upgraded_peers / total_peers * 100)

        if self._status:
            total_peers = len(self._status.peers)
            total_upgraded_peers = total_upgraded_peers(self._status.peers)
            total_upgraded_peers_perc = total_upgraded_peers_perc(total_peers, total_upgraded_peers)
            statistics = {
                Stats.PEERS_TO_UPGRADE: total_peers,
                Stats.OVERALL_UPGRADED: total_upgraded_peers,
                Stats.OVERALL_UPGRADED_PERC: total_upgraded_peers_perc,
            }
        else:
            statistics = {
                Stats.PEERS_TO_UPGRADE: 0,
                Stats.OVERALL_UPGRADED: 0,
                Stats.OVERALL_UPGRADED_PERC: 0,
            }
        self._response[Stats.KEY] = statistics

    def _format_overall_upgrade_status(self):
        if self._status:
            self._response[UpgradeStatus.KEY] = self._status.status.value
        else:
            self._response[UpgradeStatus.KEY] = "no_upgrade"

    def format_response(self):
        self._format_overall_upgrade_status()
        self._format_statistics()
        self._format_peer_list()
        return self._response


def to_upgrade_shc_status_response(status: Optional[KvUpgradeProgress]) -> JsonObject:
    return {UpgradeShcStatusKeys.MESSAGE: UpgradeShcStatusResponse(status).format_response()}
