import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = ({ onSuccess }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { firstName, lastName, email, password });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <div className="name-fields">
        <div className="input-group">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="input-group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="     Your Email"
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="     Your Password"
        />
      </div>
      <button type="submit" className="get-started-button">
        Get Started
      </button>
    </form>
  );
};

export default SignUpForm;
