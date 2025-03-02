import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../../GlobalComponents/ProgressBar/ProgressBar";
import userProfilePic from "../../../../assets/userProfilePic.jpg";
import viewProfileIcon from "../../../../assets/user.svg";
import settingsIcon from "../../../../assets/gear.svg";
import logoutIcon from "../../../../assets/logout.svg";
import { useUserContext } from "../../../../Context/UserContext"; // Import the useUserContext hook
import "./ProfileMenu.css";

const ProfileMenu = () => {
  const { UserName, email, isAuthenticated, clearUserDetails } = useUserContext(); // Access username and email from context
  const [showMenu, setShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPath, setNextPath] = useState(null);
  const [nextState, setNextState] = useState(null);
  const navigate = useNavigate();

  const handleNavigateWithDelay = (path, state) => {
    setNextPath(path);
    setNextState(state);
    setIsLoading(true);
  };

  const handleLogout = () => {
    clearUserDetails(); // Clear the user details when logging out
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <>
      <ProgressBar isLoading={isLoading} onComplete={() => {
        navigate(nextPath, { state: nextState });
        setIsLoading(false);
      }} />

      <div
        className="sidebar-profile"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <img src={userProfilePic} alt="User" className="profile-pic" />
        <div className="user-info">
          {/* Display user name and email from context */}
          <p className="user-name">{isAuthenticated ? UserName : "Guest"}</p>
          <p className="user-email">{isAuthenticated ? email : "Not logged in"}</p>
        </div>

        {showMenu && (
          <div className="profile-menu">
            <div className="menu-item" onClick={() => handleNavigateWithDelay("/ProfilePage", { activeTab: "profile" })}>
              <img src={viewProfileIcon} alt="View Profile" className="menu-icon" />
              View Profile
            </div>
            <div className="menu-item" onClick={() => handleNavigateWithDelay("/ProfilePage", { activeTab: "settings" })}>
              <img src={settingsIcon} alt="User Settings" className="menu-icon" />
              User Settings
            </div>
            <div className="menu-item" onClick={handleLogout}>
              <img src={logoutIcon} alt="Logout" className="menu-icon" />
              Logout
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileMenu;
