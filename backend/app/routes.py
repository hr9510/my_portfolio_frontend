from flask import request, jsonify, Blueprint
from . import db
from .models import FormData

main_bp = Blueprint("main_bp", __name__)

@main_bp.route("/setFormData", methods=["POST"])
def set_form_data():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400

    new_data = FormData(
        name=data.get("name"),
        email=data.get("email"),
        message=data.get("message")
    )
    db.session.add(new_data)
    db.session.commit()   # ⚠️ tu commit bhool gaya tha
    return jsonify({"message": "Data sent successfully!"}), 201


@main_bp.route("/getFormData", methods=["GET"])
def get_form_data():
    form_data = FormData.query.all()
    data_list = [{"id" : fd.id, "name": fd.name, "email": fd.email, "message": fd.message} for fd in form_data]

    if not data_list:
        return jsonify({"message": "No messages found"}), 200
    
    return jsonify(data_list), 200
