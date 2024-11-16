import json
import os
import uuid  # Import to generate unique IDs

class User:
    DATA_FILE = "users.json"  # File to store user data
    FILE_PATH = "users.json"

    def __init__(self, username, password_hash, user_id=None):
        self.username = username
        self.password_hash = password_hash
        # Generate a unique ID for the user if not provided
        self.id = user_id or str(uuid.uuid4())

    @classmethod
    def user_exists(cls, username):
        users = cls._load_data()
        return username in users

    @classmethod
    def get_user_by_username(cls, username):
        users = cls._load_data()
        if username in users:
            user_data = users[username]
            return cls(username, user_data["password_hash"], user_id=user_data["id"])
        return None

    def save(self):
        users = self._load_data()
        users[self.username] = {"password_hash": self.password_hash, "id": self.id}
        self._save_data(users)

 
    @classmethod
    def _load_data(cls):
        try:
            with open(cls.FILE_PATH, "r") as file:
                return json.load(file)
        except (FileNotFoundError, json.JSONDecodeError):
            # If file is not found or empty, return an empty dictionary
            return {}



    @classmethod
    def _save_data(cls, data):
        with open(cls.DATA_FILE, "w") as file:
            json.dump(data, file, indent=4)
