import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import './ItinerariesPage.css';

const ItinerariesPage = ({ onBack, onLogout, onViewDetails }) => {
  return (
    <div>
      <nav className="nav-bar">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1 className="page-title">Your Itineraries</h1>
        <button className="logout-button" onClick={onLogout}>Logout</button>
      </nav>

      <div className="itineraries-container">
        <div className="itineraries-grid">
          {/* Trip Card */}
          <div className="trip-card">
            <div className="trip-image">
              <img src="/api/placeholder/400/200" alt="Norway Winter" />
            </div>
            <div className="trip-content">
              <div className="trip-header">
                <h3>Winter Adventure</h3>
                <div className="trip-price">$2,499</div>
              </div>
              <div className="trip-info">
                <div className="info-item">
                  <MapPin size={16} />
                  <span>Norway</span>
                </div>
                <div className="info-item">
                  <Calendar size={16} />
                  <span>Dec 5 - Dec 6, 2024</span>
                </div>
              </div>
              <div className="trip-tags">
                <span className="tag">Nature</span>
                <span className="tag">Adventure</span>
              </div>
              <button className="view-details-btn" onClick={onViewDetails}>View Details</button>
            </div>
          </div>

          <div className="add-trip-card">
            <p>Plan a New Adventure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItinerariesPage;
