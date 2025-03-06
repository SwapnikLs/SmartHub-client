import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";
import userProfilePic from "../assets/userProfilePic.jpg";
import "../Components/ProfilePageComponents/ProfilePage.css";
import Button from "../Components/GlobalComponents/Button/Button";
import logout from "../assets/logout.svg";
import left from "../assets/left.svg";
import UserSettings from "../Components/ProfilePageComponents/UserSettings/UserSettings";
import ViewProfile from "../Components/ProfilePageComponents/ViewProfile/ViewProfile";
import ProgressBar from "../Components/GlobalComponents/ProgressBar/ProgressBar"; // Import ProgressBar

const ProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // States
  const [activeTab, setActiveTab] = useState(location.state?.activeTab || "profile");
  const [headerDisplay, setHeaderDisplay] = useState("");
  const [loading, setLoading] = useState(false); // Progress bar state

  // Access user data from UserContext
  const { clearUserDetails } = useUserContext();

  useEffect(() => {
    setHeaderDisplay(activeTab === "profile" ? "View Profile" : "User Settings");
  }, [activeTab]);

  // 🔄 Function to handle "Go Back" with Progress Bar
  const handleGoBack = () => {
    setLoading(true); // Show progress bar
    setTimeout(() => {
      navigate("/explore"); // Navigate after delay
      setLoading(false); // Hide progress bar
    }, 500); // 0.5s delay to show progress
  };

  // 🔄 Function to handle "Logout" with Progress Bar
  const handleLogout = () => {
    setLoading(true); // Show progress bar
    setTimeout(() => {
      clearUserDetails();
      navigate("/login"); // Navigate after delay
      setLoading(false); // Hide progress bar
    }, 500); // 0.5s delay to show progress
  };

  return (
    <div className="profile-container">
      <ProgressBar start={loading} /> {/* Progress Bar */}

      {/* Back Button */}
      <div className="back" onClick={handleGoBack}>
        <img src={left} alt="Back" />
        <Button text="Go Back" />
      </div>

      {/* Logout Button */}
      <div 
        className="logout" 
        style={{ position: "absolute", top: "10px", right: "20px" }}
        onClick={handleLogout}
      >
        <img src={logout} alt="Logout" />
        <Button text="Log Out" />
      </div>

      {/* Page Heading */}
      <h1 className="page-heading">{headerDisplay}</h1>

      {/* Tabs */}
      <div className="tabs">
        <button 
          className={activeTab === "profile" ? "active" : ""} 
          onClick={() => setActiveTab("profile")}
        >
          View Profile
        </button>
        <button 
          className={activeTab === "settings" ? "active" : ""} 
          onClick={() => setActiveTab("settings")}
        >
          User Settings
        </button>
      </div>

      {/* Content */}
      <div className="content-box">
        {activeTab === "profile" ? <ViewProfile /> : <UserSettings />}
      </div>
    </div>
  );
};

export default ProfilePage;
