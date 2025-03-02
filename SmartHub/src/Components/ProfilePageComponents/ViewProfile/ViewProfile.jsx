import React from "react";
import "./ViewProfile.css"
import userProfilePic from "../../../assets/userProfilePic.jpg"
import { useUserContext } from "../../../Context/UserContext"; // Import useUserContext

function ViewProfile() {
      const { UserName,firstName, lastName, email, phone, dob, isAuthenticated, clearUserDetails } = useUserContext();
    
  return (
    <div className="profile-details">
      <img src={userProfilePic} alt="User" className="profile-pic1" />
      <h2>
        {firstName} {lastName}
      </h2>
      <p>Username: {UserName}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Date of Birth: {dob}</p>
      {/* Add other user details as needed */}
    </div>
  );
}

export default ViewProfile;
