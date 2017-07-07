import os
import unittest

from flask_script import Manager

from api import create_app, db

config_name = os.getenv('FLASK_CONFIG') or 'development'
app = create_app(config_name=config_name)
manager = Manager(app)


@manager.command
def create_db():
    """Creates all database tables"""
    db.create_all()


@manager.command
def test():
    """Launches the tests using unittest"""
    tests = unittest.TestLoader().discover('tests')
    unittest.TextTestRunner(verbosity=2).run(tests)


if __name__ == '__main__':
    manager.run()
