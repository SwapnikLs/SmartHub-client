import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../GlobalComponents/Button/Button";
import Modal from "../Modal/Modal";
import { useUserContext } from "../../../Context/UserContext"; // Import the context
import "./UserSettings.css"
const UserSettings = () => {
  const { UserName, setUserDetails } = useUserContext(); // Get UserName from context
  const [userData, setUserData] = useState(null); // State to store the fetched user data
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Dob, setDob] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [NewUserName, setNewUserName] = useState(""); // New state for username
  const [showModal, setShowModal] = useState(false);
  const [usernameTaken, setUsernameTaken] = useState(false); // To track if username is already taken

  // Fetch user data by username from the server
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/users?UserName=${UserName}` // Fetch user by UserName
        );
        
        if (response.data.length > 0) {
          const user = response.data[0]; // Assume only one user with that username
          setUserData(user);
          setFirstName(user.firstName);
          setLastName(user.lastName);
          setPhone(user.phone);
          setDob(user.dob);
          setNewUserName(user.UserName); // Set initial username
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [UserName]); // Fetch data whenever the UserName in the context changes

  // Function to check if the new username is already taken
  const checkUsernameAvailability = async () => {
    if (NewUserName === userData.UserName) {
      setUsernameTaken(false); // No need to check if the username hasn't changed
      return true;
    }
  
    try {
      const response = await axios.get(
        `http://localhost:5000/users?UserName=${NewUserName}`
      );
      if (response.data.length > 0) {
        // Username already exists
        setUsernameTaken(true);
        return false;
      }
      setUsernameTaken(false);
      return true;
    } catch (error) {
      console.error("Error checking username availability:", error);
      return false;
    }
  };

  // Function to handle save changes (trigger modal)
  const handleSaveChanges = async () => {
    if (!await checkUsernameAvailability()) {
      return; // Don't proceed if the username is taken
    }

    setShowModal(true); // Show modal when Save Changes is clicked
  };

  // Function to confirm changes (save logic here)
  const handleConfirm = async () => {
    console.log("Saving changes...");
  
    const updatedUserData = {
      UserName: NewUserName,
      firstName: FirstName,
      lastName: LastName,
      phone: Phone,
      dob: Dob,
      email: userData.email, // Ensure email is included in the updated data
      password: Password,
      confirmPassword: ConfirmPassword,
    };
  
    try {
      const response = await axios.put(
        `http://localhost:5000/users/${userData.id}`, // Update user by their ID
        updatedUserData
      );
  
      if (response.status === 200) {
        console.log("User details updated successfully!");
  
        // Update the user data in the context
        setUserDetails(updatedUserData);
        setShowModal(false); // Close modal after confirming
      } else {
        console.error("Failed to update user details");
      }
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };
  
  // Function to cancel changes (just close the modal)
  const handleCancel = () => {
    setShowModal(false); // Close modal without saving
  };

  if (!userData) {
    return <div>Loading...</div>; // Show loading until the user data is fetched
  }

  return (
    <div className="user-settings">
      <h2>Account Settings</h2>

      {/* First Name */}
      <div className="setting-row">
        <label>Change First Name</label>
        <input
          type="text"
          placeholder="Enter new first name"
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      {/* Last Name */}
      <div className="setting-row">
        <label>Change Last Name</label>
        <input
          type="text"
          placeholder="Enter new last name"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      {/* Username */}
      <div className="setting-row">
        <label>Change Username</label>
        <input
          type="text"
          placeholder="Enter new username"
          value={NewUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        {usernameTaken && <p style={{ color: 'red' }}>Username is already taken.</p>}
      </div>

      {/* Phone Number */}
      <div className="setting-row">
        <label>Change Phone Number</label>
        <input
          type="text"
          placeholder="Enter new phone number"
          value={Phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/* Date of Birth */}
      <div className="setting-row">
        <label>Change Date of Birth</label>
        <input
          type="date"
          value={Dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>

      {/* Password */}
      <div className="setting-row">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter new password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Confirm Password */}
      <div className="setting-row">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={ConfirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      {/* Save Changes Button */}
      <div onClick={handleSaveChanges}>
        <Button text="Save Changes" />
      </div>
     

      {/* Modal for Confirmation */}
      <Modal
        show={showModal}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default UserSettings;
