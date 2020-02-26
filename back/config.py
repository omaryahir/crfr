import os 
from localsettings import *

class BaseConfig(object):
    SECRET_KEY = os.environment['CRFR_SECRET_KEY']
    DEBUG = os.environment['CRFR_DEBUG']
    DB_NAME = os.environ['CRFR_DB_NAME']
    DB_USER = os.environ['CRFR_DB_USER']
    DB_PASS = os.environ['CRFR_DB_PASS']
    DB_SERVICE = os.environ['CRFR_DB_SERVICE']
    DB_PORT = os.environ['CRFR_DB_PORT']
    SQLALCHEMY_DATABASE_URI = 'postgresql://{0}:{1}@{2}:{3}/{4}'.format(
        DB_USER, DB_PASS, DB_SERVICE, DB_PORT, DB_NAME
    )