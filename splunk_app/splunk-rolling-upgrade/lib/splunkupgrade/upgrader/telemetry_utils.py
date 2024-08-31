from typing import List, Optional

from splunkupgrade.utils.server_roles_mapper import ServerRolesMapper


class TelemetryStatus:
    IN_PROGRESS = "IN_PROGRESS"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"


class TelemetryDeploymentType:
    SHC = "shc"
    SHC_STANDALONE = "shc_standalone"
    DEPLOYER = "deployer"
    UNKNOWN = "unknown"


TELEMETRY_VERSION_UNKNOWN = "unknown"


def role_to_telemetry_deployment_type(roles: Optional[ServerRolesMapper]) -> str:
    if not roles:
        return TelemetryDeploymentType.UNKNOWN
    elif roles.is_deployer_only():
        return TelemetryDeploymentType.DEPLOYER
    elif roles.is_standalone_search_head():
        return TelemetryDeploymentType.SHC_STANDALONE
    elif roles.is_shc_peer():
        return TelemetryDeploymentType.SHC
    else:
        return TelemetryDeploymentType.UNKNOWN


def telemetry_log(
    message: str,
    upgrade_id: int,
    peers: List[str],
    status: str,
    deployment_type: str,
    reason: str,
    from_version: str,
    to_version: str,
):
    formatted_peers = ",".join(peers)
    log_line = (
        '{0}: telemetry_id="{1}", '
        + 'telemetry_peers="{2}", '
        + 'telemetry_status="{3}", '
        + 'telemetry_deployment_type="{4}", '
        + 'telemetry_reason="{5}", '
        + 'telemetry_from_version="{6}", '
        + 'telemetry_to_version="{7}"'
    ).format(
        message,
        upgrade_id,
        formatted_peers,
        status,
        deployment_type,
        reason,
        from_version,
        to_version,
    )
    return log_line
