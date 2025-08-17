from . import db
from sqlalchemy import Column, Integer, String

class FormData(db.Model):
    __tablename__ = "form_data"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(50), nullable = False)
    message = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return f"<FormData {self.name}>"
