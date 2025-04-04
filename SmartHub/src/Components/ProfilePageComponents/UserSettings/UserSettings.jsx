import React, { useState, useEffect } from "react";
import Button from "../../GlobalComponents/Button/Button";
import Modal from "../Modal/Modal";
import { useUserContext } from "../../../Context/UserContext"; // Import the context
import "./UserSettings.css";
import axios from "axios";

const UserSettings = () => {
  const { 
    username, 
    firstName, 
    lastName, 
    number, 
    dob, 
    email,
    setUserDetails 
  } = useUserContext(); // Get user details from context

  // State variables for input fields
  const [newUsername, setNewUsername] = useState(username);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newnumber, setNewnumber] = useState(number);
  const [newDob, setNewDob] = useState(dob);
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState(email);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Update state if context changes (edge case when user logs in/out)
  useEffect(() => {
    setNewUsername(username);
    setNewFirstName(firstName);
    setNewLastName(lastName);
    setNewnumber(number);
    setNewDob(dob);
    setNewEmail(email)
  }, [username, firstName, lastName, number,email, dob]);

  // Function to handle save changes
  const handleSaveChanges = () => {
    setShowModal(true); // Show confirmation modal
  };

  const handleConfirm = async () => {
    if (newPassword && newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // Use default values from context if fields are empty
    const updatedUserData = {
      username: newUsername.trim() || username, // Use default username if empty
      firstName: newFirstName.trim() || firstName, // Use default first name if empty
      lastName: newLastName.trim() || lastName, // Use default last name if empty
      number: newnumber.trim() || number, // Use default number if empty
      dob: newDob || dob, // Use default date of birth if empty
      email: newEmail.trim() || email, // Use default email if empty
      ...(newPassword ? { password: newPassword } : {}), // Include password only if updated
    };
  
    try {
      // 🔥 Call the backend API to update user details
      const response = await axios.put(
        `http://localhost:8080/api/auth/update?username=${username}`,
        updatedUserData
      );
  
      // ✅ If successful, update frontend state
        if (response.status === 200) {
          setUserDetails(response.data); // Update context with latest user data
          alert("Profile updated successfully!");
          setShowModal(false); // Close modal
        }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };
  // Function to cancel changes (close modal)
  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="user-settings">
      <h2>Account Settings</h2>

      {/* First Name */}
      <div className="setting-row">
        <label>Change First Name</label>
        <input
          type="text"
          value={newFirstName}
          onChange={(e) => setNewFirstName(e.target.value)}
        />
      </div>

      {/* Last Name */}
      <div className="setting-row">
        <label>Change Last Name</label>
        <input
          type="text"
          value={newLastName}
          onChange={(e) => setNewLastName(e.target.value)}
        />
      </div>

      {/* Username */}
      <div className="setting-row">
        <label>Change Username</label>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
      </div>

      {/* number Number */}
      <div className="setting-row">
        <label>Change  Number</label>
        <input
          type="text"
          value={newnumber}
          onChange={(e) => setNewnumber(e.target.value)}
        />
      </div>

      {/* Date of Birth */}
      <div className="setting-row">
        <label>Change Date of Birth</label>
        <input
          type="date"
          value={newDob}
          onChange={(e) => setNewDob(e.target.value)}
        />
      </div>
      <div className="setting-row">
        <label>Change Date of Birth</label>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
      </div>


      {/* Password */}
      <div className="setting-row">
        <label>New Password (Optional)</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      {/* Confirm Password */}
      <div className="setting-row">
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      {/* Save Changes Button */}
      <div onClick={handleSaveChanges}>
        <Button text="Save Changes" />
      </div>

      {/* Modal for Confirmation */}
      <Modal show={showModal} onConfirm={handleConfirm} onCancel={handleCancel} />
    </div>
  );
};

export default UserSettings;
