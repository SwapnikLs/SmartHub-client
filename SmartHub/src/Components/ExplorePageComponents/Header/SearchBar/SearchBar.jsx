import React, { useState } from "react";
import MultiDropdown from "../../../GlobalComponents/DropDown/DropDown"
import "./SearchBar.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const options = {
    filter: [
      "Filter", "Books", "Articles", "Videos", "Genre", "Author", "Publication Year", "Language", "Format", "Availability"
    ],
    sort: [
      "Sort By", "Relevance", "Newest First", "Oldest First", "Most Borrowed", "Highest Rated", "Alphabetical (A-Z)", "Alphabetical (Z-A)"
    ]
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
        />
        <div className="filter-sort-container">
          <MultiDropdown options={options.filter} />
          <MultiDropdown options={options.sort} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
