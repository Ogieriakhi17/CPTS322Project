import React, { useState } from 'react';
import LoginPage from './LoginPage/LoginPage';
import SignUpPage from './SignUpPage/SignUpPage';
import HomePage from './HomePage/HomePage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const renderPage = () => {
    switch(currentPage) {
      case 'login':
        return <LoginPage 
          onSignUpClick={() => setCurrentPage('signup')}
          onLoginSuccess={() => setCurrentPage('home')}
        />;
      case 'signup':
        return <SignUpPage 
          onLoginClick={() => setCurrentPage('login')}
          onSignUpSuccess={() => setCurrentPage('home')}
        />;
      case 'home':
        return <HomePage />;
      default:
        return <LoginPage />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
