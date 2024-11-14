# backend/config.py

# Secret key for hashing passwords or tokens
SECRET_KEY = "travellll"  # Replace with a strong, unique key

# File path to user data (for now, a JSON file path)
USER_DATA_PATH = "auth/user_data.json"

# Optional: Additional configuration for expanding in the future
DB_CONNECTION_STRING = "sqlite:///database.db"  # Placeholder for database config
TOKEN_EXPIRY_DURATION = 3600  # Expiry duration in seconds for session tokens
