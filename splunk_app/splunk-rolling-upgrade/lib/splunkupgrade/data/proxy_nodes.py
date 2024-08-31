from dataclasses import dataclass
from typing import List

from splunkupgrade.data.parsing import get
from splunkupgrade.utils.constants import ProxyNodeKeys
from splunkupgrade.utils.types import JsonObject


@dataclass
class ProxyNode:
    proxy_to: str
    servername: str
    role: str


def to_proxy_node(json_node: JsonObject) -> ProxyNode:
    return ProxyNode(
        get(json_node, ProxyNodeKeys.PROXY_TO, str),
        get(json_node, ProxyNodeKeys.SERVERNAME, str),
        get(json_node, ProxyNodeKeys.ROLE, str),
    )


def to_proxy_node_list(json_proxy_response: JsonObject) -> List[ProxyNode]:
    json_list = get(json_proxy_response, ProxyNodeKeys.NODES, list)
    return [to_proxy_node(element) for element in json_list]
