import json
from app import app

def test_save_itinerary(client):
    # Arrange
    data = {
        "user_id": 1,
        "itinerary_data": {
            "destination": "Paris",
            "activities": ["Visit Eiffel Tower", "Explore Louvre Museum"]
        }
    }
    
    # Act
    response = client.post('/api/itineraries', data=json.dumps(data), content_type='application/json')
    
    # Assert
    assert response.status_code == 201
    response_data = response.get_json()
    assert response_data["message"] == "Itinerary saved successfully"
    assert "id" in response_data
