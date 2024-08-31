from dataclasses import dataclass
from packaging.version import Version
from splunkupgrade.data.parsing import get, to_version
from splunkupgrade.utils.types import JsonObject
from splunkupgrade.utils.constants import SearchheadGenerationKeys


@dataclass
class SearchheadGeneration:
    cluster_master_version: Version


def to_searchhead_generation(json_searchhead_generation: JsonObject) -> SearchheadGeneration:
    return SearchheadGeneration(
        to_version(
            get(json_searchhead_generation, SearchheadGenerationKeys.CLUSTER_MASTER_VERSION, str)
        )
    )
