import logging

from flask import Flask
from flask_cors import CORS, cross_origin
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy

from config import app_config

db = SQLAlchemy()


def create_app(config_name):
    """
    Flask Application factory

    :param config_name: Name of the configuration to be passed to the application
    :return: Initialized Flask application
    """
    app = Flask(__name__)
    app.config.from_object(app_config[config_name])

    db.init_app(app)
    CORS(app)

    # Register Flask-Restful APIs
    from api.resources.entry import EntryAPI, EntryListAPI, EntryListOverviewAPI
    api = Api(app)
    api.add_resource(EntryListAPI, '/api/v0.1/entries', endpoint='entries')
    api.add_resource(EntryListOverviewAPI, '/api/v0.1/entries/overview', endpoint='entries_overview')
    api.add_resource(EntryAPI, '/api/v0.1/entries/<int:entry_id>', endpoint='entry')

    # Setup logging
    log_level = app.config['LOG_LEVEL'] or logging.INFO
    handler = logging.StreamHandler().setLevel(log_level)
    app.logger.addHandler(handler)

    return app
