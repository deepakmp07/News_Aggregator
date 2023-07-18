import React, { useState } from 'react';
import './header.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
    setSearchTerm('');
  };

  return (
    <div className="navbar">
      <h1 className="header-title">News Aggregator</h1>
        <div className='search'>
      <form className="search-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search here ..."
          className="search-input"
          value={searchTerm}
          onChange={handleInputChange}
          />
          <div className='searchbar'>
        <button type="submit" className="search-button">
          Search
        </button>
          </div>
      </form>
          </div>

      <ul className="nav-links">
        {/* Add your navigation links here */}
      </ul>
    </div>
  );
};

export default Navbar;
