from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy

from api.resources.entry import EntryAPI, EntryListAPI
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

    # Register Flask-Restful APIs
    api = Api(app)
    api.add_resource(EntryListAPI, '/api/v0.1/entries', endpoint='entries')
    api.add_resource(EntryAPI, '/api/v0.1/entries/<int:id>', endpoint='entry')

    return app
