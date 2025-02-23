import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";
import MultiDropdown from '../../GlobalComponents/DropDown/Dropdown';

import hamburger from "../../../assets/hamburger-menu.svg";
import resourcelibrary from "../../../assets/resourcelibrary.svg";
import genre from "../../../assets/genre.svg";
import smartpick from "../../../assets/smartpick.svg";
import requestabook from "../../../assets/requestabook.svg";
import support from "../../../assets/support.svg";
import adminpanel from "../../../assets/adminpanel.svg";
import communityexchange from "../../../assets/communityexchange.svg";

const Header = () => {
  const options = {
    filter: [
      "Filter", "Books", "Articles", "Videos", "Genre", "Author", "Publication Year", "Language", "Format", "Availability"
    ],
    sort: [
      "Sort By", "Relevance", "Newest First", "Oldest First", "Most Borrowed", "Highest Rated", "Alphabetical (A-Z)", "Alphabetical (Z-A)"
    ]
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <div className="header-wrapper">
      {/* Hamburger Icon */}
      <div 
        className="hamburger"
        onMouseEnter={() => setIsSidebarOpen(true)}  
      >
        <img src={hamburger} alt="Menu" />
      </div>

      {/* Sidebar */}
      <div 
        className={`sidebar ${isSidebarOpen ? 'open' : ''}`} 
        onMouseLeave={() => setIsSidebarOpen(false)}
      >
        <nav className="sidebar-links">
          <NavLink to="/resource-library" activeClassName="active">
            <img src={resourcelibrary} width="30px" alt="" /> Resource Library
          </NavLink>
          <NavLink to="/smart-picks" activeClassName="active">
            <img src={smartpick} width="30px" alt="" /> Smart Picks
          </NavLink>
          <NavLink to="/community" activeClassName="active">
            <img src={communityexchange} width="30px" alt="" /> Community Exchange
          </NavLink>
          <NavLink to="/request-book" activeClassName="active">
            <img src={requestabook} width="30px" alt="" /> Request a Book
          </NavLink>
          <NavLink to="/admin-panel" activeClassName="active">
            <img src={adminpanel} width="30px" alt="" /> Admin Panel
          </NavLink>
          <NavLink to="/genres" activeClassName="active">
            <img src={genre} width="30px" alt="" /> Genres
          </NavLink>
          <NavLink to="/support" activeClassName="active">
            <img src={support} width="30px" alt="" /> Support
          </NavLink>
        </nav>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className='inputandfilter'>  
          <input 
            className="search-input"
            type="text" 
            placeholder="Search books, articles, videos..." 
            value={searchQuery} 
            onChange={handleSearchChange} 
          />
          <div className="filter-sort-container">
            <MultiDropdown options={options.filter} />
            <MultiDropdown options={options.sort} />
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Header;
