from flask import Blueprint, jsonify
from models.itineraries import Itinerary
from database import session

itineraries_bp = Blueprint('itineraries', __name__)

@itineraries_bp.route('/api/itineraries/<int:user_id>', methods=['GET'])
def get_itineraries(user_id):
    itineraries = session.query(Itinerary).filter_by(user_id=user_id).all()
    return jsonify([{"id": i.id, "itinerary_data": i.itinerary_data, "created_at": i.created_at} for i in itineraries]), 200
