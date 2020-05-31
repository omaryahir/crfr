from sqlalchemy.dialects.postgresql import UUID
from app import db

class User (db.Model):

    __tablename__ = 'fr_auth_db.users'

    id = db.Column(UUID(as_uuid=True), unique=True, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    username = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    created = db.Column(db.DateTime)

    def __init__(self, first_name):
        self.first_name = firstname
