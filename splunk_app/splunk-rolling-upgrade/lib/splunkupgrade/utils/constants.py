import os
from enum import Enum, IntEnum


def get_relative_path_to_app_executable(app_name: str, name: str) -> str:
    return os.path.join("etc", "apps", app_name, "bin", name)


class GeneralConstants:
    APP_NAME = "splunk-rolling-upgrade"
    ROLLING_UPGRADE_CONF = "rolling_upgrade"
    COLLECTION_NAME = "shcupgrade"
    UPGRADER_NAME = "upgrader_script.py"
    UPGRADER_RELATIVE_PATH = get_relative_path_to_app_executable(APP_NAME, UPGRADER_NAME)
    UPGRADE_FILE_RELATIVE_PATH = os.path.join("var", "run", "splunk", "trigger-rolling-upgrade")
    SPLUNK_HOME = "SPLUNK_HOME"
    DOWNLOADED_PACKAGE_PATH_ENV_VAR = "SPLUNK_NEW_PACKAGE_PATH"
    ARCHIVE_INSTALLER_NAME = "install_tgz.sh"
    ARCHIVE_INSTALLER_RELATIVE_PATH = os.path.join(
        "etc", "apps", APP_NAME, "hooks", ARCHIVE_INSTALLER_NAME
    )
    OUTPUT_MODE = "output_mode"


class RequestsConfStanza:
    STANZA_NAME = "requests"
    RETRIES = "retries"
    RETRY_DELAY = "delay"
    TIMEOUT = "timeout"


class LoggerConfStanza:
    STANZA_NAME = "logging"
    LOG_LEVEL = "log_level"


class ProcessRunnerConfStanza:
    STANZA_NAME = "process_runner"
    TIMEOUT = "timeout"


class KVStoreRetryConfStanza:
    STANZA_NAME = "kvstore_retry"
    MAX_TRIES = "max_tries"
    INITIAL_DELAY_AFTER_EACH_RETRY = "initial_delay_after_each_retry"


class ClusterRetryConfStanza:
    STANZA_NAME = "cluster_retry"
    MAX_TRIES = "max_tries"
    INITIAL_DELAY_AFTER_EACH_RETRY = "initial_delay_after_each_retry"


class PeersReadinessRetryConfigStanza:
    STANZA_NAME = "shcluster_members_retry"
    MAX_TRIES = "max_tries"
    INITIAL_DELAY_AFTER_EACH_RETRY = "initial_delay_after_each_retry"


class DownloadConfStanza:
    STANZA_NAME = "downloader"
    PACKAGE_PATH = "package_path"
    NEW_VERSION = "upgrade_splunk_to_version"


class HookStanza:
    STANZA_NAME = "hook"
    INSTALL_SCRIPT_PATH = "install_script_path"
    HOOK_MODE = "hook_mode"


class ShcStatusKeys:
    PEERS = "peers"
    DYNAMIC_CAPTAIN = "dynamic_captain"
    STABLE_CAPTAIN = "stable_captain"
    MAX_FAILURES_TO_KEEP_MAJORITY = "max_failures_to_keep_majority"
    SERVICE_READY_FLAG = "service_ready_flag"
    ROLLING_RESTART_FLAG = "rolling_restart_flag"
    ROLLING_UPGRADE_FLAG = "rolling_upgrade_flag"
    CAPTAIN = "captain"
    OUT_OF_SYNC_NODE = "out_of_sync_node"
    LABEL = "label"
    MANUAL_DETENTION = "manual_detention"
    MANAGEMENT_URI = "mgmt_uri"
    SPLUNK_VERSION = "splunk_version"
    STATUS = "status"


class KvStoreStatusKeys:
    CURRENT = "current"
    STATUS = "status"


class KvStoreUpgradeRecordKeys:
    ID = "id"
    STATUS = "status"
    PEERS = "peers"
    PEER_NAME = "name"
    PEER_STATUS = "status"
    PEER_TIMESTAMP = "timestamp"
    PEER_UPGRADER_PID = "upgrader_pid"
    PEER_COMPLETION_PID = "completion_pid"
    FROM_VERSION = "from_version"
    TO_VERSION = "to_version"
    KEY = "_key"


class ServerRolesKeys:
    ROLE_LIST = "role_list"


class InitiateUpgradeResponseKeys:
    SUCCESS = "success"


class ProxyNodeKeys:
    PROXY_TO = "proxy_to"
    SERVERNAME = "servername"
    ROLE = "role"
    NODES = "nodes"


class UpgradeEnpointsResponseKeys:
    MESSAGE = "message"
    STATUS = "status"
    STATUS_CODE = "status_code"
    PAYLOAD = "payload"


class ShcManualDetectionMode(Enum):
    ON = "on"
    OFF = "off"


class ExitCodes(IntEnum):
    OK = 0
    UNSUPPORTED_UPGRADE = 1
    ERROR_WHEN_UPGRADING = 2


class UpgradeShcStatusResponsePeers:
    KEY = "peers"
    NAME = "name"
    STATUS = "status"
    DATE = "last_modified"


class UpgradeShcStatusKeys:
    MESSAGE = "message"


class UpgradeShcStatusResponseStats:
    KEY = "statistics"
    PEERS_TO_UPGRADE = "peers_to_upgrade"
    OVERALL_UPGRADED = "overall_peers_upgraded"
    OVERALL_UPGRADED_PERC = "overall_peers_upgraded_percentage"


class UpgradeShcStatusResponseOverallStatus:
    KEY = "upgrade_status"


class ServerInfoKeys:
    SERVERNAME = "serverName"
    VERSION = "version"


# NOTE: This is almost the format used in shcluster-status, like for example:
#       Tue Aug 23 17:33:27 2022.
UPGRADE_SHC_STATUS_DATETIME_FORMAT = "%a %b %d %H:%M:%S %Y"


class SearchheadGenerationKeys:
    CLUSTER_MASTER_VERSION = "cluster_master_version"


SHC_UPGRADE_NOT_SUPPORTED_PEER = "Peer is not a SHC member/standalone SH/deployer"
