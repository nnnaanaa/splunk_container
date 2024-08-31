import logging
from os import R_OK, access
from os.path import isabs
from typing import Tuple
from urllib.parse import urlparse

from splunkupgrade.downloader.remote_downloader import handle_remote_path
from splunkupgrade.utils.exceptions import InvalidDownloaderConfigError

logger = logging.getLogger(__name__)


def is_local_path_valid(local_path: str) -> bool:
    return local_path is not None and isabs(local_path) and access(local_path, R_OK)


def retrieve_new_splunk_package_path(package_url: str) -> str:
    def split_url(path_from_conf: str) -> Tuple[str, str]:
        parts = urlparse(path_from_conf)
        return parts.scheme, parts.path

    def is_download_needed(schema: str) -> bool:
        return schema != "file"

    schema, package_path = split_url(package_url)

    if is_download_needed(schema):
        resulting_path = handle_remote_path(package_url)
    elif is_local_path_valid(package_path):
        resulting_path = package_path
    else:
        msg = f"Invalid path='{package_path}' specified"
        logger.error(msg)
        raise InvalidDownloaderConfigError(msg)
    logger.info(f"Splunk package available at path='{resulting_path}'")
    return resulting_path
