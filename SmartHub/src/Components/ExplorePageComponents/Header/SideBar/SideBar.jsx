import React from "react";
import { NavLink } from "react-router-dom";
import resourcelibrary from "../../../../assets/resourcelibrary.svg";
import genre from "../../../../assets/genre.svg";
import smartpick from "../../../../assets/smartpick.svg";
import requestabook from "../../../../assets/requestabook.svg";
import support from "../../../../assets/support.svg";
import adminpanel from "../../../../assets/adminpanel.svg";
import communityexchange from "../../../../assets/communityexchange.svg";
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
        <NavLink 
          to="/explore" 
          end
          className={({ isActive }) => isActive ? "active" : ""}
        >
          <img src={resourcelibrary} width="30px" alt="" /> Resource Library
        </NavLink>
        <NavLink to="/explore/smart-picks">
          <img src={smartpick} width="30px" alt="" /> Smart Picks
        </NavLink>
        <NavLink to="/explore/community">
          <img src={communityexchange} width="30px" alt="" /> Community Exchange
        </NavLink>
        <NavLink to="/explore/request-book">
          <img src={requestabook} width="30px" alt="" /> Request a Book
        </NavLink>
        <NavLink to="/explore/admin-panel">
          <img src={adminpanel} width="30px" alt="" /> Admin Panel
        </NavLink>
        <NavLink to="/explore/genres">
          <img src={genre} width="30px" alt="" /> Genres
        </NavLink>
        <NavLink to="/explore/support">
          <img src={support} width="30px" alt="" /> Support
        </NavLink>
      </div>

      <ProfileMenu />
    </div>
  );
};

export default Sidebar;
