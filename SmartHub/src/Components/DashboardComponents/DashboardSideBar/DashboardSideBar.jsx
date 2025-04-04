import React, { useState, useEffect } from 'react';
import './DashboardSideBar.css';
import UserStats from './Stats/UserStats';  // Correct casing
import SidebarButton from './SideBarButton/SideBarButton';
import { FaTachometerAlt, FaClock, FaHeart, FaCheck, FaList, FaStar } from 'react-icons/fa';

const Sidebar = ({ handleButtonClick }) => {
  const [activeButton, setActiveButton] = useState(() => {
    // Retrieve the active button from local storage or default to 'Status'
    return localStorage.getItem('activeButton') || 'Status';
  });

  const handleClick = (name) => {
    setActiveButton(name);
    handleButtonClick(name);
    localStorage.setItem('activeButton', name); // Save the active button to local storage
  };

  useEffect(() => {
    // Ensure the active button is set in local storage on initial render
    localStorage.setItem('activeButton', activeButton);
  }, [activeButton]);

  return (
    <div className="sidebar1">
      {/* Sidebar Logo */}
      <div className="sidebar-logo">
        <h2>SKH</h2>
      </div>

      {/* Sidebar Buttons */}
      <div className="sidebar-buttons">
        <SidebarButton label="Status" Icon={FaList} isActive={activeButton === 'Status'} onClick={() => handleClick('Status')} />
        <SidebarButton label="OverDues" Icon={FaClock} isActive={activeButton === 'OverDues'} onClick={() => handleClick('OverDues')} />
        <SidebarButton label="WishList" Icon={FaStar} isActive={activeButton === 'WishList'} onClick={() => handleClick('WishList')} />
        <SidebarButton label="Completed" Icon={FaCheck} isActive={activeButton === 'Completed'} onClick={() => handleClick('Completed')} />
      </div>

      {/* Book Stats Section */}
      <UserStats />
    </div>
  );
};

export default Sidebar;
