# import openai
# import os
# class OpenAIClient:
#     def __init__(self):
#         self.api_key = os.getenv("OPENAI_API_KEY")
#         if not self.api_key:
#             raise ValueError("OPENAI_API_KEY environment variable is not set.")
#         openai.api_key = self.api_key

#     def generate_itinerary(self, preferences):
#         print("Sending preferences to OpenAI...")
#         try:
#             response = openai.ChatCompletion.create(
#                 model="gpt-3.5-turbo",
#                 messages=[
#                     {"role": "system", "content": "You are a travel assistant."},
#                     {"role": "user", "content": f"Generate a travel itinerary for these preferences: {preferences}"}
#                 ]
#             )
#             itinerary = response['choices'][0]['message']['content']
#             return itinerary
#         except Exception as e:
#             print(f"Error generating itinerary: {e}")
#             return None

import openai
import os

class OpenAIClient:
    def generate_itinerary(self, preferences):
        try:
            print("Sending preferences to OpenAI...")
            
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {
                        "role": "system",
                        "content": "You are a travel assistant that generates personalized travel itineraries."
                    },
                    {
                        "role": "user",
                        "content": f"Generate a travel itinerary for these preferences: {preferences}"
                    }
                ],
                max_tokens=1500,
                temperature=0.7
            )

            itinerary = response['choices'][0]['message']['content']
            return itinerary
        
        except Exception as e:
            print(f"Error generating itinerary: {e}")
            return None
