# backend/auth/auth_helpers.py
import hashlib
import jwt
import config  # for secret keys

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

def verify_password(password, password_hash):
    return hash_password(password) == password_hash

def generate_token(user):
    payload = {"user_id": user.id}
    return jwt.encode(payload, config.SECRET_KEY, algorithm="HS256")
