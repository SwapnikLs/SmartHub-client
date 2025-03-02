import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../SideBar/SideBar";
import SearchBar from "../SearchBar/SearchBar";
import hamburger from "../../../../assets/hamburger-menu.svg";
import "./MainHeader.css"
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="header-wrapper">
      {/* Hamburger Icon */}
      <div
        className="hamburger"
        onMouseEnter={() => setIsSidebarOpen(true)}
      >
        <img src={hamburger} alt="Menu" />
      </div>

      {/* Sidebar Component */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Search Bar Component */}
      <SearchBar />
    </div>
  );
};

export default Header;
