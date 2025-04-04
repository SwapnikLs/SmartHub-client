import React from "react";
import "./ViewProfile.css"
import userProfilePic from "../../../assets/userProfilePic.jpg"
import { useUserContext } from "../../../Context/UserContext"; // Import useUserContext

function ViewProfile() {
      const { username,firstName, lastName, email, number, dob, isAuthenticated } = useUserContext();
    
  return (
    <div className="profile-details">
      <img src={userProfilePic} alt="User" className="profile-pic1" />
      <h2>
        {firstName} {lastName}
      </h2>
      <p>username: {username}</p>
      <p>Email: {email}</p>
      <p>Phone: {number}</p>
      <p>Date of Birth: {dob}</p>
      {/* Add other user details as needed */}
    </div>
  );
}

export default ViewProfile;
