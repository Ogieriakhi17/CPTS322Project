import React from 'react';
import './HomePage.css';

const HomePage = ({ onLogout, onSearch, onItineraries }) => {
  const today = new Date().toISOString().split('T')[0];
 
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-logo">TravelBuddy</div>
        <div className="nav-links">
          <button className="itineraries-btn" onClick={onItineraries}>Itineraries</button>
          <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
      </nav>

      <div className="content-wrapper">
        <div className="hero-section">
          <h1>Your Journey,<br />Tailored Just for You.</h1>
          <p>TravelBuddy empowers limitless exploration, forging unforgettable memories beyond maps.</p>
        </div>
        <form className="home-search-container" onSubmit={handleSearch}>
          <div className="home-search-group">
            <label>Destination</label>
            <input 
              type="text" 
              placeholder="Where do you want to go?"
              required
            />
          </div>
          <div className="home-search-group">
            <label>Start Date</label>
            <input 
              type="date"
              min={today}
              required
            />
          </div>
          <div className="home-search-group">
            <label>End Date</label>
            <input 
              type="date"
              min={today}
              required
            />
          </div>
          <div className="home-search-group">
            <label>Budget</label>
            <input 
              type="number"
              placeholder="Your budget"
              min="0"
              required
            />
          </div>
          <div className="home-search-group">
            <label>Interest</label>
            <input 
              type="text"
              placeholder="Enter your interests"
              required
            />
          </div>
          <div className="home-search-button-container">
            <button type="submit" className="search-btn">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
