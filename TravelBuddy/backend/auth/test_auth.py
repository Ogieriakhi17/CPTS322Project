# backend/auth/test_auth.py
from signup import signup_user
from login import login_user

# Mock user data for testing
mock_user = {"username": "testuser", "password": "password123"}

def test_signup_success():
    response = signup_user(mock_user["username"], mock_user["password"])
    print("Signup Response:", response)  # Debugging line
    assert response["status"] == "success", "Signup should succeed for new user"


def test_signup_duplicate_user():
    signup_user(mock_user["username"], mock_user["password"])  # Initial signup
    response = signup_user(mock_user["username"], mock_user["password"])  # Attempt duplicate signup
    assert response["status"] == "failure", "Duplicate signup should fail"

def test_login_success():
    signup_user(mock_user["username"], mock_user["password"])  # Ensure user exists
    response = login_user(mock_user["username"], mock_user["password"])
    assert response["status"] == "success", "Login should succeed with correct credentials"

def test_login_failure():
    response = login_user("wronguser", "wrongpass")
    assert response["status"] == "failure", "Login should fail with incorrect credentials"

if __name__ == "__main__":
    test_signup_success()
    test_signup_duplicate_user()
    test_login_success()
    test_login_failure()
    print("All tests passed!")
