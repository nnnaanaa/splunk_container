import argparse
import logging.config
import os
import platform
import re

from splunkupgrade.utils.constants import GeneralConstants
from splunkupgrade.utils.exceptions import UndefinedEnvVariableException
from splunkupgrade.data.parsing import DataParseException

logger = logging.getLogger(__name__)


class SplunkVersionAction(argparse.Action):
    def __init__(self, option_strings, dest, nargs=None, **kwargs):
        super().__init__(option_strings, dest, **kwargs)

    def __call__(self, parser, namespace, values, option_string=None):
        p = re.compile("^([1-9]\\d*)(\\.(([1-9]\\d*)|0)){0,3}$")
        if p.match(values):
            setattr(namespace, self.dest, values)
        else:
            raise ValueError(f"version='{values}' is an invalid Splunk version")


def is_windows() -> bool:
    name = platform.system()
    return name == "Windows" or name.startswith("CYGWIN")


def is_linux() -> bool:
    # NOTE: https://docs.python.org/3/library/platform.html. The documentation
    # doesn't really say anything about different Linux flavours (like Ubuntu vs
    # CentOS). The way I tested this was to simply to this:
    # =================
    # Ubuntu test case:
    # =================
    # lstoppa@C02DL3AAMD6R % docker run -i -t ubuntu
    # root@fc50bb709634:/# python3.10
    # Python 3.10.6 (main, Aug 10 2022, 11:40:04) [GCC 11.3.0] on linux
    # Type "help", "copyright", "credits" or "license" for more information.
    # >>> import platform
    # >>> print(platform.system())
    # Linux
    # =================
    # CentOS test case:
    # =================
    # lstoppa@C02DL3AAMD6R % docker run -i -t centos:7
    # [root@30d22df9d388 /]# python
    # Python 2.7.5 (default, Oct 14 2020, 14:45:30)
    # [GCC 4.8.5 20150623 (Red Hat 4.8.5-44)] on linux2
    # Type "help", "copyright", "credits" or "license" for more information.
    # >>> import platform
    # >>> print(platform.system())
    # Linux
    name = platform.system()
    return name == "Linux"


def is_supported_platform() -> bool:
    return is_linux()


def get_path_or_none(dictionary, *args):
    current_node = dictionary
    try:
        for arg in args:
            current_node = current_node[arg]
    except Exception:
        return None
    return current_node


def does_path_exist(dictionary, *args) -> bool:
    try:
        current_node = dictionary
        for arg in args:
            current_node = current_node[arg]
    except Exception:
        return False
    return True


def get_env_variable(env_variable_name: str) -> str:
    if env_variable_name and env_variable_name in os.environ:
        return os.environ[env_variable_name]
    else:
        raise UndefinedEnvVariableException(f"Environment variable='{env_variable_name}' undefined")


def get_splunkd_path() -> str:
    splunk_binary = "splunk.exe" if is_windows() else "splunk"
    return os.path.join(get_env_variable(GeneralConstants.SPLUNK_HOME), "bin", splunk_binary)
