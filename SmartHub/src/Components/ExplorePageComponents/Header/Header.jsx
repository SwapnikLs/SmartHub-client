import React, { useState } from 'react';
import "./Header.css";
import MainHeader from './MainHeader/MainHeader';
import Sidebar from './SideBar/SideBar';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {

  return (
    <div className="header-wrapper">
      <MainHeader/>
    </div>
  );
};

export default Header;
