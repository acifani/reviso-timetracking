import os
import logging

basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    LOG_LEVEL = logging.INFO
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'antani'
    SQLALCHEMY_COMMIT_ON_TEARDOWN = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_RECORD_QUERIES = True
    SQLALCHEMY_ECHO = False


class DevelopmentConfig(Config):
    DEBUG = True
    LOG_LEVEL = logging.DEBUG
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_DATABASE_URI = os.getenv('DEV_DB_URI') or \
                              'sqlite:///' + os.path.join(basedir, 'dev_db.sqlite')


class TestingConfig(Config):
    LOG_LEVEL = logging.ERROR
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.getenv('TEST_DB_URI') or \
                              'sqlite:///' + os.path.join(basedir, 'test_db.sqlite')


class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = os.getenv('DB_URI') or \
                              'sqlite:///' + os.path.join(basedir, 'db.sqlite')


class HerokuConfig(Config):
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')


app_config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'testing': TestingConfig,
    'heroku': HerokuConfig
}
