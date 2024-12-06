import React from 'react';
import { Calendar, MapPin, Clock, DollarSign, Heart, Share2, Bed, Wifi, Coffee, Utensils } from 'lucide-react';
import './DestinationDetail.css';

const hotels = [
  {
    name: "Arctic Ice Hotel",
    type: "Luxury",
    price: "$350",
    rating: 4.8,
    amenities: ["Free Wifi", "Restaurant", "Spa", "Room Service"],
    description: "Unique ice hotel experience with modern comforts and stunning architecture.",
    image: "/api/placeholder/400/300"
  },
  {
    name: "Northern Lights Lodge",
    type: "Boutique",
    price: "$280",
    rating: 4.6,
    amenities: ["Free Wifi", "Restaurant", "Bar", "Aurora View"],
    description: "Cozy lodge with premium aurora viewing opportunities and traditional Norwegian design.",
    image: "/api/placeholder/400/300"
  }
];

const DestinationDetail = ({ onBack, onLogout }) => {
  const renderAmenityIcon = (amenity) => {
    switch (amenity) {
      case "Free Wifi":
        return <Wifi className="amenity-icon" />;
      case "Restaurant":
        return <Utensils className="amenity-icon" />;
      case "Room Service":
        return <Coffee className="amenity-icon" />;
      case "Spa":
        return <Bed className="amenity-icon" />;
      default:
        return null;
    }
  };

  const handleAddToItineraries = () => {
    console.log('Added to Itineraries');
  };

  return (
    <div className="destination-container">
      <button 
        onClick={onBack}
        className="back-button"
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          cursor: 'pointer',
          zIndex: 10
        }}
      >
        ← Back
      </button>

      <div className="hero-section">
        <img 
          src="/api/placeholder/1200/600" 
          alt="Winter Adventure in Norway" 
          className="hero-image"
        />
        <div className="hero-buttons">
          <button className="hero-button">
            <Heart className="hero-button-icon" />
          </button>
          <button className="hero-button">
            <Share2 className="hero-button-icon share" />
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="content-left">
          <div className="title-section">
            <h1 className="main-title">Winter Adventure</h1>
            <div className="location">
              <MapPin className="location-icon" />
              <span>Norway</span>
            </div>
          </div>

          <div className="card info-card">
            <div className="card-header">Overview</div>
            <div className="card-content">
              Experience the magical winter wonderland of Norway. This adventure includes northern lights viewing, dog sledding, and stay in unique ice hotels. Perfect for nature enthusiasts and adventure seekers looking for an unforgettable Arctic experience.
            </div>
          </div>

          <div className="card info-card">
            <div className="card-header">Activities</div>
            <div className="card-content">
              <div className="activities-grid">
                {['Northern Lights Tour', 'Dog Sledding', 'Ice Hotel Stay', 'Fjord Cruise', 'Snowmobiling', 'Ice Fishing'].map((activity) => (
                  <div key={activity} className="activity-item">
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card info-card">
            <div className="card-header">Available Hotels</div>
            <div className="card-content">
              <div className="hotels-container">
                {hotels.map((hotel) => (
                  <div key={hotel.name} className="hotel-card">
                    <div className="hotel-grid">
                      <div className="hotel-image-container">
                        <img 
                          src={hotel.image} 
                          alt={hotel.name}
                          className="hotel-image"
                        />
                      </div>
                      <div className="hotel-details">
                        <div className="hotel-header">
                          <div>
                            <h3 className="hotel-name">{hotel.name}</h3>
                            <span className="hotel-type">{hotel.type}</span>
                          </div>
                          <div className="hotel-price">{hotel.price}/night</div>
                        </div>
                        <p className="hotel-description">{hotel.description}</p>
                        <div className="amenities-container">
                          {hotel.amenities.map((amenity) => (
                            <span key={amenity} className="amenity-tag">
                              {renderAmenityIcon(amenity)}
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="booking-sidebar">
          <div className="card booking-card">
            <div className="booking-content">
              <div className="price">$2,499</div>
              
              <div className="booking-details">
                <div className="detail-item">
                  <Calendar className="detail-icon" />
                  <div>
                    <div className="detail-label">Duration</div>
                    <div className="detail-value">Dec 5 - Dec 6, 2024</div>
                  </div>
                </div>

                <div className="detail-item">
                  <Clock className="detail-icon" />
                  <div>
                    <div className="detail-label">Best Time to Visit</div>
                    <div className="detail-value">November - March</div>
                  </div>
                </div>

                <div className="detail-item">
                  <DollarSign className="detail-icon" />
                  <div>
                    <div className="detail-label">Price Includes</div>
                    <div className="detail-value">Accommodation, Activities, Guide</div>
                  </div>
                </div>

                <div className="detail-item">
                  <Bed className="detail-icon" />
                  <div>
                    <div className="detail-label">Hotel Options</div>
                    <div className="detail-value">2 available properties</div>
                  </div>
                </div>
              </div>

              <button 
                className="add-to-itineraries-btn" 
                onClick={handleAddToItineraries}
              >
                Add to Itineraries
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
