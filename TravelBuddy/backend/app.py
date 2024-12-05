from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

# Flask app setup
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///travelbuddy.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Itinerary model
class Itinerary(db.Model):
    __tablename__ = 'itineraries'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, nullable=False)
    itinerary_data = db.Column(db.JSON, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# Initialize the database
with app.app_context():
    db.create_all()

# API to save itineraries
@app.route('/api/itineraries', methods=['POST'])
def save_itinerary():
    data = request.get_json()
    try:
        user_id = data['user_id']
        itinerary_data = data['itinerary_data']
        
        # Save to database
        new_itinerary = Itinerary(user_id=user_id, itinerary_data=itinerary_data)
        db.session.add(new_itinerary)
        db.session.commit()
        
        return jsonify({"message": "Itinerary saved successfully", "id": new_itinerary.id}), 201
    except KeyError as e:
        return jsonify({"error": f"Missing field: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# API to retrieve itineraries by user ID
@app.route('/api/itineraries/<int:user_id>', methods=['GET'])
def get_itineraries(user_id):
    itineraries = Itinerary.query.filter_by(user_id=user_id).all()
    return jsonify([
        {
            "id": itinerary.id,
            "itinerary_data": itinerary.itinerary_data,
            "created_at": itinerary.created_at
        }
        for itinerary in itineraries
    ]), 200

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
