def test_modify_itinerary(client):
    response = client.put('/api/itinerary/1', json={"activity": "New Activity"})
    assert response.status_code == 200
    assert response.json["itinerary"]["activity"] == "New Activity"
