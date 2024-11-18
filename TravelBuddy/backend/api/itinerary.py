# itinerary.py
from flask import Flask, request, jsonify
from preferences import collect_preferences
from openai_client import OpenAIClient

app = Flask(__name__)
client = OpenAIClient()

@app.route('/generate-itinerary', methods=['POST'])
def generate_itinerary():
    try:
        # Collect preferences
        data = request.get_json()
        preferences_response = collect_preferences()

        if preferences_response.status_code != 200:
            return preferences_response

        preferences = preferences_response.get_json()["preferences"]

        # Generate itinerary using OpenAI
        itinerary = client.generate_itinerary(preferences)
        if not itinerary:
            return jsonify({"status": "failure", "error": "Could not generate itinerary."}), 500

        return jsonify({"status": "success", "itinerary": itinerary}), 200

    except Exception as e:
        return jsonify({"status": "failure", "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
