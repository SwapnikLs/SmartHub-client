import React, { useState } from 'react';
import './DashboardSideBar.css';
import BooksStats from './Stats/BooksStats';
import SidebarButton from './SideBarButton/SideBarButton';
import { FaTachometerAlt, FaClock, FaHeart, FaCheck, FaList, FaStar } from 'react-icons/fa';

const Sidebar = ({ handleButtonClick }) => {
  const [activeButton, setActiveButton] = useState('Status');

  const handleClick = (name) => {
    setActiveButton(name);
    handleButtonClick(name);
  };

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
      <BooksStats />
    </div>
  );
};

export default Sidebar;
