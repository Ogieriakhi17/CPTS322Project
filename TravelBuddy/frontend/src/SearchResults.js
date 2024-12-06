import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronDown, Map, Heart } from 'lucide-react';
import DestinationDetail from '../Destinations/DestinationDetail';
import './SearchResults.css';

function SearchResults({ onBack, onLogout, onItineraries }) {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [searchResults] = useState([
    {
      id: 1,
      name: "Winter Adventure",
      location: "Norway",
      price: "$2,499",
      tags: ['Nature', 'Adventure'],
      description: "Experience the magical winter wonderland of Norway...",
      activities: ['Northern Lights Tour', 'Dog Sledding', 'Ice Hotel Stay', 'Fjord Cruise', 'Snowmobiling', 'Ice Fishing']
    }
  ]);
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    interest: 'nature'
  });
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const validateForm = () => {
    if (!formData.destination.trim()) {
      alert('Please enter destination');
      return false;
    }
    if (!formData.startDate) {
      alert('Please select start date');
      return false;
    }
    if (!formData.endDate) {
      alert('Please select end date');
      return false;
    }
    if (!formData.budget) {
      alert('Please enter budget');
      return false;
    }
    return true;
  };

  const handleSearch = () => {
    if (validateForm()) {
      console.log('Search with:', formData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'startDate' && formData.endDate && value > formData.endDate) {
      setFormData(prev => ({
        ...prev,
        endDate: value
      }));
    }
  };

  const handleSort = (sortType) => {
    console.log('Sort by:', sortType);
  };

  const handleFilter = (filterType, value) => {
    console.log('Filter:', filterType, value);
  };

  const handleViewDetails = (item) => {
    setSelectedDestination(item);
  };

  if (selectedDestination) {
    return (
      <DestinationDetail 
        destination={selectedDestination}
        onBack={() => setSelectedDestination(null)}
      />
    );
  }

  return (
    <div className="search-page">
      <nav className="search-nav">
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <div className="nav-links">
          <button className="itineraries-btn" onClick={onItineraries}>Itineraries</button>
          <button className="logout" onClick={onLogout}>Logout</button>
        </div>
      </nav>

      <div className="search-section">
        <div className="search-container">
          <div className="search-grid">
            <div className="search-field">
              <label>Destination</label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                placeholder="Where to?"
              />
            </div>
            <div className="search-field">
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                min={today}
              />
            </div>
            <div className="search-field">
              <label>End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                min={formData.startDate || today}
              />
            </div>
            <div className="search-field">
              <label>Budget</label>
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                placeholder="Enter amount"
              />
            </div>
            <div className="search-field">
              <label>Interest</label>
              <input
                type="text"
                placeholder="Enter your interests"
                defaultValue={formData.interest}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  interest: e.target.value
                }))}
              />
            </div>
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="results-section">
        <div className="filters-container">
          <div className="results-count">
            Found {searchResults.length} destinations
          </div>
          <div className="filter-buttons">
            <div className="dropdown-container">
              <button 
                className="filter-btn"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
              >
                Sort by <ChevronDown size={16} />
              </button>
              {showSortDropdown && (
                <div className="dropdown-menu">
                  <button onClick={() => handleSort('recommended')}>Recommended</button>
                  <button onClick={() => handleSort('price-low')}>Price: Low to High</button>
                  <button onClick={() => handleSort('price-high')}>Price: High to Low</button>
                  <button onClick={() => handleSort('rating')}>Rating</button>
                </div>
              )}
            </div>
            <div className="dropdown-container">
              <button 
                className="filter-btn"
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              >
                Filter <ChevronDown size={16} />
              </button>
              {showFilterDropdown && (
                <div className="dropdown-menu">
                  <div className="filter-section">
                    <h4>Price Range</h4>
                    <button onClick={() => handleFilter('price', 'under-1000')}>Under $1,000</button>
                    <button onClick={() => handleFilter('price', '1000-2000')}>$1,000 - $2,000</button>
                    <button onClick={() => handleFilter('price', '2000-3000')}>$2,000 - $3,000</button>
                    <button onClick={() => handleFilter('price', 'over-3000')}>Over $3,000</button>
                  </div>
                  <div className="filter-section">
                    <h4>Duration</h4>
                    <button onClick={() => handleFilter('duration', 'short')}>1-3 Days</button>
                    <button onClick={() => handleFilter('duration', 'medium')}>4-7 Days</button>
                    <button onClick={() => handleFilter('duration', 'long')}>8+ Days</button>
                  </div>
                </div>
              )}
            </div>
            <button className="map-btn">
              <Map size={16} /> Map View
            </button>
          </div>
        </div>

        <div className="results-grid">
          {searchResults.map((item) => (
            <div key={item.id} className="result-card">
              <div className="card-image-container">
                <img src={`/api/placeholder/400/250`} alt="Destination" />
                <button className="favorite-btn">
                  <Heart size={16} />
                </button>
              </div>
              <div className="card-content">
                <div className="card-header">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.location}</p>
                  </div>
                  <span className="price">{item.price}</span>
                </div>
                <div className="tag-container">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  className="view-details-btn"
                  onClick={() => handleViewDetails(item)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
