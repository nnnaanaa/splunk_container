"""
Copyright (C) 2009-2021 Splunk Inc. All Rights Reserved.

Modular Input for subscribing new users to their most visited reports
"""

import warnings

warnings.filterwarnings('ignore', '.*service_identity.*', UserWarning)

import sys
import os
from splunk.clilib.bundle_paths import make_splunkhome_path
from spacebridgeapp.util import py23

os.environ['PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION'] = 'python'

from spacebridgeapp.util.base_modular_input import BaseModularInput
from spacebridgeapp.logging import setup_logging
from spacebridgeapp.util.splunk_utils.common import modular_input_should_run
from spacebridgeapp.util.constants import SPACEBRIDGE_APP_NAME
from spacebridgeapp.reports.reports_heuristics import ReportHeuristics


class ReportHeuristicsModularInput(BaseModularInput):
    title = 'Splunk Secure Gateway Report Heuristics'
    description = 'Subscribe new users to their most visited reports'
    app = 'Splunk Secure Gateway'
    name = 'splunk_secure_gateway'
    use_kvstore_checkpointer = False
    use_hec_event_writer = False
    logger = setup_logging(SPACEBRIDGE_APP_NAME + '.log', 'ssg_report_heuristics_modular_input.app')
    input_config_key = "ssg_report_heuristics_modular_input://default"

    def extra_arguments(self):
        """
        Override extra_arguments list for modular_input scheme
        :return:
        """
        return [
            {
                'name': 'param1',
                'description': 'No params required'
            }
        ]

    def do_run(self, input_config):
        """
        Executes reports heuristics modular input
        :param input_config:
        :return:
        """
        if not super(ReportHeuristicsModularInput, self).do_run(input_config):
            return

        if not modular_input_should_run(self.session_key, logger=self.logger):
            self.logger.debug("Modular input will not run on this node.")
            return

        self.logger.info("Running Report Heuristics modular input on search captain node")
        report_heuristics = ReportHeuristics(self.logger, self.session_key)

        try:
            report_heuristics.run()
        except Exception as e:
            self.logger.warning(f'Failure encountered while running Report Heuristics Modular Input {e}')


if __name__ == "__main__":
    worker = ReportHeuristicsModularInput()
    worker.execute()
