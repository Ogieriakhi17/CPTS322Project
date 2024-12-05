from flask import Flask, request, jsonify
from sqlalchemy import create_engine, Column, Integer, String, Text, JSON, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

app = Flask(__name__)

# Database setup
Base = declarative_base()
engine = create_engine('sqlite:///travelbuddy.db')
Session = sessionmaker(bind=engine)
session = Session()

# Itinerary model
class Itinerary(Base):
    __tablename__ = 'itineraries'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, nullable=False)
    itinerary_data = Column(JSON, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

Base.metadata.create_all(engine)

# Save itinerary endpoint
@app.route('/api/save-itinerary', methods=['POST'])
def save_itinerary():
    data = request.json
    user_id = data.get('user_id')
    itinerary_data = data.get('itinerary_data')

    if not user_id or not itinerary_data:
        return jsonify({"error": "Missing required fields"}), 400

    try:
        new_itinerary = Itinerary(user_id=user_id, itinerary_data=itinerary_data)
        session.add(new_itinerary)
        session.commit()
        return jsonify({"message": "Itinerary saved successfully"}), 201
    except Exception as e:
        session.rollback()
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
