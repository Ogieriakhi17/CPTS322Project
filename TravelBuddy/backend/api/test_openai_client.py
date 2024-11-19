# test_openai_client.py
from openai_client import OpenAIClient

def test_openai_client_generate_itinerary():
    # Sample preferences
    preferences = {
        "destination": "Tokyo",
        "start_date": "2024-12-10",
        "end_date": "2024-12-15",
        "budget": "2000",
        "interests": ["technology", "shopping", "anime"]
    }


    # Initialize OpenAI client
    client = OpenAIClient()
    
    # Generate itinerary
    itinerary = client.generate_itinerary(preferences)

    # Print the result (for manual testing) or assert for automated testing
    print("Generated Itinerary:")
    print(itinerary)

    # For automated testing, you can replace prints with assertions
    assert itinerary, "Itinerary generation failed"
    assert "Day" in itinerary, "Expected detailed itinerary content"

# Ensure the function runs when the script is executed
if __name__ == "__main__":
    test_openai_client_generate_itinerary()

