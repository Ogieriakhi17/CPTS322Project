# backend/auth/login.py
import auth_helpers
import config  # for config values like secret keys
from models.user import User  # User model

def login_user(username, password):
    user = User.get_user_by_username(username)
    if user and auth_helpers.verify_password(password, user.password_hash):
        token = auth_helpers.generate_token(user)
        return {"status": "success", "token": token}
    else:
        return {"status": "failure", "error": "Invalid credentials"}
