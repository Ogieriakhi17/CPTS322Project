# preferences.py
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/preferences', methods=['POST'])
def collect_preferences():
    try:
        # Parse user input
        data = request.get_json()

        # Extract preferences
        destination = data.get('destination')
        start_date = data.get('start_date')
        end_date = data.get('end_date')
        budget = data.get('budget')
        interests = data.get('interests')  # e.g., ["culture", "adventure", "food"]

        # Validate input
        if not all([destination, start_date, end_date, budget, interests]):
            return jsonify({"status": "failure", "error": "All fields are required."}), 400

        # Prepare and return response
        preferences = {
            "destination": destination,
            "start_date": start_date,
            "end_date": end_date,
            "budget": budget,
            "interests": interests
        }
        return jsonify({"status": "success", "preferences": preferences}), 200

    except Exception as e:
        return jsonify({"status": "failure", "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
