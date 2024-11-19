import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import './SignUpPage.css';

const SignUpPage = ({ onLoginClick, onSignUpSuccess }) => {
  return (
    <div className="signup-container">
      <h1>Sign Up to TravelBuddy</h1>
      <p className="subtitle">Please enter your details below.</p>
      <SignUpForm onSuccess={onSignUpSuccess} />
      <div className="login-link">
        Already have an account? {' '}
        <button onClick={onLoginClick}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
