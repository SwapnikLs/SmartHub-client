import React from "react";
import { NavLink } from "react-router-dom";
import { 
  FaBook, FaUsers, FaBookOpen, FaUserShield, FaShapes, FaLifeRing 
} from "react-icons/fa";  // Import necessary icons
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import "./SideBar.css";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div 
      className={`sidebar ${isSidebarOpen ? "open" : ""}`} 
      onMouseLeave={() => setIsSidebarOpen(false)}
    >
      <div className="sidebar-links">
        {/* Default active Resource Library */}
        <NavLink to="/explore" end className={({ isActive }) => (isActive ? "active" : "")}>
          <FaBook size={30} /> Resource Library
        </NavLink>
        <NavLink to="/explore/community">
          <FaUsers size={30} /> Community Exchange
        </NavLink>
        <NavLink to="/explore/request-book">
          <FaBookOpen size={30} /> Request a Book
        </NavLink>
        <NavLink to="/dashboard">
          <FaUserShield size={30} /> User Panel
        </NavLink>
        <NavLink to="/explore/genres">
          <FaShapes size={30} /> Genres
        </NavLink>
        <NavLink to="/explore/support">
          <FaLifeRing size={30} /> Support
        </NavLink>
      </div>

      <ProfileMenu />
    </div>
  );
};

export default Sidebar;
