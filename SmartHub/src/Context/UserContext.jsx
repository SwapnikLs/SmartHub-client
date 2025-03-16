import React, { createContext, useContext, useState, useEffect } from "react";

// Create UserContext
export const UserContext = createContext();

// Custom hook to use UserContext
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

// UserProvider component to wrap the app and provide context
export const UserProvider = ({ children }) => {
  // Load user details from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};

  // State to store user details (updated)
  const [username, setUsername] = useState(storedUser.username || "");
  const [firstName, setFirstName] = useState(storedUser.firstName || "");
  const [lastName, setLastName] = useState(storedUser.lastName || "");
  const [password, setPassword] = useState(storedUser.password || "");
  const [confirmPassword, setConfirmPassword] = useState(storedUser.confirmPassword || "");
  const [phone, setPhone] = useState(storedUser.phone || "");
  const [email, setEmail] = useState(storedUser.email || "");
  const [dob, setDob] = useState(storedUser.dob || "");
  const [isAuthenticated, setIsAuthenticated] = useState(!!storedUser.username); // If user exists, set auth to true

  // Function to set user details (login)
  const setUserDetails = (userData) => {
    setUsername(userData.username);
    setFirstName(userData.firstName);
    setLastName(userData.lastName);
    setPassword(userData.password);
    setConfirmPassword(userData.confirmPassword);
    setPhone(userData.phone);
    setEmail(userData.email);
    setDob(userData.dob);
    setIsAuthenticated(true);

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(userData));
  };
 
  // Function to clear user details (logout)
  const clearUserDetails = () => {
    setUsername("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setConfirmPassword("");
    setPhone("");
    setEmail("");
    setDob("");
    setIsAuthenticated(false);

    // Remove from localStorage
    localStorage.removeItem("user");
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
