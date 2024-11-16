# backend/auth/signup.py
import auth_helpers
from models.user import User

def signup_user(username, password):
    print(f"Attempting signup for {username}")  # Debugging line
    if User.user_exists(username):
        print("User already exists")  # Debugging line
        return {"status": "failure", "error": "Username already taken"}
    
    password_hash = auth_helpers.hash_password(password)
    print("Password hashed:", password_hash)  # Debugging line
    
    user = User(username=username, password_hash=password_hash)
    user.save()
    print(f"User {username} saved successfully")  # Debugging line
    return {"status": "success", "message": "User created successfully"}

