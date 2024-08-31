"""
Copyright (C) 2009-2021 Splunk Inc. All Rights Reserved.

Base class for all modular_inputs in this app.  All new modular_inputs should extend off this.
"""
import logging
import sys
from abc import abstractmethod
from solnlib import modular_input
from spacebridgeapp.rest.services.splunk_service import get_cluster_mode, get_server_roles
from spacebridgeapp.util.config import load_config
from spacebridgeapp.logging import setup_logging
from spacebridgeapp.util import constants

import time

SERVER_CHECK_TIMEOUT = 600
SERVER_CHECK_INTERVAL = 30
KV_STORE = 'kv_store'
DISABLED = 'disabled'
SEARCHHEAD = 'searchhead'
ACCEPTED_CLUSTER_MODES = [DISABLED, SEARCHHEAD]
LOG_DEFAULT_FMT = '%(levelname)s [%(name)s:%(lineno)d] [%(funcName)s] [%(process)d] %(message)s'


def fallback_logger(mod_input_name, level=logging.INFO):
    logging.addLevelName(logging.INFO, 'INFO')
    handler = logging.StreamHandler(sys.stderr)
    formatter = logging.Formatter(LOG_DEFAULT_FMT)
    handler.setFormatter(formatter)
    logger = logging.getLogger(mod_input_name)
    logger.setLevel(level)
    logger.addHandler(handler)

    return logger


class BaseModularInput(modular_input.ModularInput):

    def _should_modular_input_run(self):
        try:
            server_roles = get_server_roles(self.session_key)
            cluster_mode = get_cluster_mode(self.session_key)
            return cluster_mode in ACCEPTED_CLUSTER_MODES and KV_STORE in server_roles
        except Exception:
            # Fail closed
            return False

    @abstractmethod
    def do_run(self, inputs):
        count = 0
        while not self._should_modular_input_run():
            count += SERVER_CHECK_INTERVAL
            time.sleep(SERVER_CHECK_INTERVAL)
            if count >= SERVER_CHECK_TIMEOUT:
                return False
        return True

    def config(self):
        return load_config(self.session_key)

    def setup_logging(self, mod_input_name, filename=f"{constants.SPACEBRIDGE_APP_NAME}_modular_input.log"):
        try:
            return setup_logging(filename, mod_input_name, config=self.config())
        except Exception:
            logger = fallback_logger(mod_input_name)
            logger.info(f'{filename} could not be created, will attempt to reinitialize in the next run of {mod_input_name}')
            return
