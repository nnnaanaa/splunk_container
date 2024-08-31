"""
Copyright (C) 2009-2021 Splunk Inc. All Rights Reserved.

REST endpoint handler for accessing and setting instance setting kvstore records
"""
import sys
from splunk.clilib.bundle_paths import make_splunkhome_path
import os
os.environ['PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION'] = 'python'

sys.path.append(make_splunkhome_path(['etc', 'apps', 'splunk_secure_gateway', 'bin']))
sys.path.append(make_splunkhome_path(['etc', 'apps', 'splunk_secure_gateway', 'lib']))

from http import HTTPStatus
from spacebridgeapp.rest.base_endpoint import BaseRestHandler
from spacebridgeapp.util.constants import MESSAGE, PAYLOAD, STATUS
from splunk.persistconn.application import PersistentServerConnectionApplication
from spacebridgeapp.rest.config.instance_config_helper import update_config, delete_config

class SetInstanceConfig(BaseRestHandler, PersistentServerConnectionApplication):
    """
    Main class for setting the instance config endpoint. Subclasses the spacebridge_app
    BaseRestHandler.

    """

    def __init__(self, command_line, command_arg):
        BaseRestHandler.__init__(self, logname="set_rest_instance_config")

    def post(self, request):
        success, result = update_config(self.log, request, self.config)

        status_code = HTTPStatus.OK
        message = result

        if not success:
            if isinstance(result, Exception):
                status_code = HTTPStatus.INTERNAL_SERVER_ERROR 
                message = str(result)
            else:
                status_code = HTTPStatus.BAD_REQUEST

        return {
            PAYLOAD: {MESSAGE: message},
            STATUS: status_code
        }

    def delete(self, request):
        success, message = delete_config(self.log, request, self.config)
        status_code = HTTPStatus.OK if success else HTTPStatus.INTERNAL_SERVER_ERROR
        
        return {
            PAYLOAD: {MESSAGE: message},
            STATUS: status_code
        }
