import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../SideBar/SideBar";
import SearchBar from "../SearchBar/SearchBar";
import hamburger from "../../../../assets/hamburger-menu.svg";
import "./MainHeader.css";

const MainHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // ✅ Define where Sidebar & SearchBar should appear
  const showSidebar = ["/explore", "/explore/genres", "/explore/support","/explore/community","/explore/request-book","/results"].includes(location.pathname);
  const showSearchBar = !["/explore/support", "/explore/request-a-book", "/explore/community"].includes(location.pathname);

  return (
    <div className="header-wrapper">
      {/* Hamburger Icon (Only if Sidebar is allowed) */}
      {showSidebar && (
        <div className="hamburger" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <img src={hamburger} alt="Menu" />
        </div>
      )}

      {/* Sidebar Component (Conditional) */}
      {showSidebar && <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />}

      {/* Search Bar Component (Conditional) */}
      {showSearchBar && <SearchBar />}
    </div>
  );
};

export default MainHeader;
