import React, { createContext, useContext, useState } from "react";

// Create UserContext
const UserContext = createContext();

// Custom hook to use UserContext
export const useUserContext = () => useContext(UserContext);

// UserProvider component to wrap the app and provide context
export const UserProvider = ({ children }) => {
  // State to store user details (updated)
  const [username, setusername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // isAuthenticated state

  // Function to set user details (updated)
  const setUserDetails = (userData) => {
    setusername(userData.username);
    setFirstName(userData.firstName);
    setLastName(userData.lastName);
    setPassword(userData.password);
    setConfirmPassword(userData.confirmPassword);
    setPhone(userData.phone);
    setDob(userData.dob);
    setEmail(userData.email);
    setIsAuthenticated(true); // Set authentication to true on login
  };

  // Function to clear user details (logout)
  const clearUserDetails = () => {
    setusername("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setConfirmPassword("");
    setPhone("");
    setDob("");
    setEmail("");
    setIsAuthenticated(false); // Set authentication to false on logout
  };

  return (
    <UserContext.Provider
      value={{
        username,
        firstName,
        lastName,
        password,
        confirmPassword,
        phone,
        dob,
        email,
        isAuthenticated, // Expose isAuthenticated
        setUserDetails,
        clearUserDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
