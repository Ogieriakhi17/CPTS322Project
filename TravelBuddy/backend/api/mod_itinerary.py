from flask import Flask, request, jsonify

app = Flask(__name__)

# Mock database
itineraries = {
    1: {"day": 1, "activity": "Visit Tokyo Tower", "time": "9:00 AM"},
    2: {"day": 2, "activity": "Shop at Akihabara", "time": "1:00 PM"}
}

@app.route('/api/itinerary/<int:id>', methods=['PUT'])
def modify_itinerary(id):
    # Check if the itinerary exists
    itinerary = itineraries.get(id)
    if not itinerary:
        return jsonify({"error": "Itinerary not found"}), 404

    # Get data from the request body
    data = request.json
    if not data:
        return jsonify({"error": "Invalid input"}), 400

    # Update the itinerary with the new details
    itinerary["day"] = data.get("day", itinerary["day"])
    itinerary["activity"] = data.get("activity", itinerary["activity"])
    itinerary["time"] = data.get("time", itinerary["time"])

    # Save changes (mock save in this example)
    itineraries[id] = itinerary

    return jsonify({"message": "Itinerary updated successfully", "itinerary": itinerary}), 200

if __name__ == '__main__':
    app.run(debug=True)
