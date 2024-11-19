import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css';

const LoginPage = ({ onSignUpClick, onLoginSuccess }) => {
  return (
    <div className="login-container">
      <div className="avatar">
        <img 
          src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='24' width='24'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>" 
          alt="User Avatar" 
        />
      </div>
      <h1>Welcome to TravelBuddy</h1>
      <p className="subtitle">Plan your perfect trip with us</p>
      <LoginForm onLoginSuccess={onLoginSuccess} />
      <div className="create-account">
        <p>New to TravelBuddy?</p>
        <button onClick={onSignUpClick} className="create-account-button">
          Create an account
        </button>
      </div>
    </div>
  );
};

export default LoginPage;