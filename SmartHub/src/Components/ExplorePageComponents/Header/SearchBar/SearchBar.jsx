import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import MultiDropdown from "../../../GlobalComponents/DropDown/DropDown";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  // Handle search submit
  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (searchQuery.trim()) {
        navigate(`/results?query=${encodeURIComponent(searchQuery)}`);
      }
    }
  };

  const options = {
    filter: ["Filter", "Books", "Genre", "Author", "Language", "Availability"],
    sort: ["Sort By", "Relevance", "Newest First", "Oldest First", "Most Borrowed", "Highest Rated", "Alphabetical (A-Z)", "Alphabetical (Z-A)"]
  };

  return (
    <div className="search-container">
      <div className="inputandfilter">
        <input 
          className="search-input"
          type="text"
          placeholder="Search books, articles, videos..."
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleSearchSubmit} // Navigate on Enter press
        />
        <button className="search-button" onClick={handleSearchSubmit}>🔍</button>
        <div className="filter-sort-container">
          <MultiDropdown options={options.filter} />
          <MultiDropdown options={options.sort} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
