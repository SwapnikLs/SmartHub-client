import React, { useState } from "react";
import Sidebar from "../SideBar/SideBar";
import hamburger from "../../../../assets/hamburger-menu.svg";
import "./VisibleSideBar.css"
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

    </div>
  );
};

export default Header;
