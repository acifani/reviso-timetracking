from api import db


class Entry(db.Model):
    """Single record entry database model definition"""
    __tablename__ = 'entries'

    id = db.Column(db.Integer, primary_key=True)
    customer = db.Column(db.String(64), nullable=False)
    timestamp = db.Column(db.DateTime, nullable=False)
    hourly_rate = db.Column(db.Float, nullable=False)
