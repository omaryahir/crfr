from local_settings import CRFR

class BaseConfig(object):
    SECRET_KEY = CRFR['SECRET_KEY']
    DEBUG = CRFR['DEBUG']
    DB_NAME = CRFR['DB_NAME']
    DB_USER = CRFR['DB_USER']
    DB_PASS = CRFR['DB_PASS']
    DB_SERVICE = CRFR['DB_SERVICE']
    DB_PORT = CRFR['DB_PORT']
    SQLALCHEMY_DATABASE_URI = 'postgresql://{0}:{1}@{2}:{3}/{4}'.format(
        DB_USER, DB_PASS, DB_SERVICE, DB_PORT, DB_NAME
    )