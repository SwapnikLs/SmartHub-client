import React, { useState, useEffect } from "react";
import Button from "../../GlobalComponents/Button/Button";
import Modal from "../Modal/Modal";
import { useUserContext } from "../../../Context/UserContext"; // Import the context
import "./UserSettings.css";

const UserSettings = () => {
  const { 
    username, 
    firstName, 
    lastName, 
    phone, 
    dob, 
    setUserDetails 
  } = useUserContext(); // Get user details from context

  // State variables for input fields
  const [newUsername, setNewUsername] = useState(username);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newPhone, setNewPhone] = useState(phone);
  const [newDob, setNewDob] = useState(dob);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Update state if context changes (edge case when user logs in/out)
  useEffect(() => {
    setNewUsername(username);
    setNewFirstName(firstName);
    setNewLastName(lastName);
    setNewPhone(phone);
    setNewDob(dob);
  }, [username, firstName, lastName, phone, dob]);

  // Function to handle save changes
  const handleSaveChanges = () => {
    setShowModal(true); // Show confirmation modal
  };

  // Function to confirm changes and update context
  const handleConfirm = () => {
    if (newPassword && newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const updatedUserData = {
      username: newUsername,
      firstName: newFirstName,
      lastName: newLastName,
      phone: newPhone,
      dob: newDob,
      ...(newPassword && { password: newPassword }), // Only include password if changed
    };

    setUserDetails(updatedUserData); // Update context
    setShowModal(false); // Close modal
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

      {/* Phone Number */}
      <div className="setting-row">
        <label>Change Phone Number</label>
        <input
          type="text"
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
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
