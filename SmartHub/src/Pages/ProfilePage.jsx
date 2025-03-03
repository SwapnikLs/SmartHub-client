import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUserContext } from "../Context/UserContext"; // Import useUserContext
import userProfilePic from "../assets/userProfilePic.jpg";
import "../Components/ProfilePageComponents/ProfilePage.css";
import Button from "../Components/GlobalComponents/Button/Button";
import ProgressBar from "../Components/GlobalComponents/ProgressBar/ProgressBar";
import logout from "../assets/logout.svg";
import left from "../assets/left.svg";
import UserSettings from "../Components/ProfilePageComponents/UserSettings/UserSettings";
import ViewProfile from "../Components/ProfilePageComponents/ViewProfile/ViewProfile";

const ProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // States for each input field
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [activeTab, setActiveTab] = useState(location.state?.activeTab || "profile");
  const [headerDisplay, setHeaderDisplay] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [nextPath, setNextPath] = useState(null);

  // Access user data from UserContext
  const { UserName, firstName, lastName, email, phone, dob, isAuthenticated, clearUserDetails } = useUserContext();

  useEffect(() => {
    setHeaderDisplay(activeTab === "profile" ? "View Profile" : "User Settings");
  }, [activeTab]);

  const handleNavigateWithDelay = (path) => {
    setNextPath(path);
    setIsLoading(true);
  };

 

  return (
    <div className="profile-container">
      <ProgressBar 
        isLoading={isLoading} 
        onComplete={() => {
          if (nextPath) {
            navigate(nextPath); // Redirect to the next path
            setIsLoading(false); // Stop loading
          }
        }} 
      />

      <div className="back" onClick={() => handleNavigateWithDelay("/explore")}>
        <img src={left} alt="Back" />
        <Button text="Go Back" />
      </div>

      {/* Logout Button */}
      <div 
        className="logout" 
        style={{ position: "absolute", top: "10px", right: "20px" }}
        onClick={() => {
          clearUserDetails(); // Clear user details on logout
          handleNavigateWithDelay("/login");
        }}
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
        {activeTab === "profile" ? (
          <ViewProfile />
        ) : (
          <UserSettings />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
