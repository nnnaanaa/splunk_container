from enum import Enum


class UpgradeStatus(Enum):
    FAILED = "Failed"
    IN_PROGRESS = "In Progress"
    COMPLETED = "Completed"
