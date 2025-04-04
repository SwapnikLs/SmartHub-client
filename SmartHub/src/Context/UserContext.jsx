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
  // Load user details and token from localStorage
  let storedUser = {};
  try {
    storedUser = JSON.parse(localStorage.getItem("user")) || {};
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
  }
  const storedToken = localStorage.getItem("authToken") || null;
  // State to store user details and authentication state
  const [username, setUsername] = useState(storedUser.username || "");
  const [firstName, setFirstName] = useState(storedUser.firstName || "");
  const [lastName, setLastName] = useState(storedUser.lastName || "");
  const [password, setPassword] = useState(storedUser.password || "");
  const [confirmPassword, setConfirmPassword] = useState(storedUser.confirmPassword || "");
  const [number, setNumber] = useState(storedUser.number || "");
  const [email, setEmail] = useState(storedUser.email || "");
  const [dob, setDob] = useState(storedUser.dob || "");
  const [isAuthenticated, setIsAuthenticated] = useState(!!storedToken);
  const [authToken, setAuthToken] = useState(storedToken); 

  const setUserDetails = (userData) => {
    if (userData.username) setUsername(userData.username);
    if (userData.firstName) setFirstName(userData.firstName);
    if (userData.lastName) setLastName(userData.lastName);
    if (userData.password) setPassword(userData.password);
    if (userData.confirmPassword) setConfirmPassword(userData.confirmPassword);
    if (userData.number) setNumber(userData.number);
    if (userData.email) setEmail(userData.email);
    if (userData.dob) setDob(userData.dob);
    if (userData.token) setAuthToken(userData.token);
  
    setIsAuthenticated(true);
  
    // Save user details and token to localStorage
    localStorage.setItem("user", JSON.stringify(userData));
    if (userData.token) localStorage.setItem("authToken", userData.token);
  };
  const setAuthTrue = (token = authToken) => {
    if (token) {
      setIsAuthenticated(true);
      localStorage.setItem("authToken", token); // Save the provided token
    } else {
      console.warn("No token provided to setAuthTrue.");
    }
  };
  const clearUserDetails = () => {
    setUsername("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setConfirmPassword("");
    setNumber("");
    setEmail("");
    setDob("");
    setIsAuthenticated(false);
    setAuthToken(null);
  
    // Clear all user-related data from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
  };
  
  const getToken = () => authToken;

  return (
    <UserContext.Provider
      value={{
        username,
        firstName,
        lastName,
        password,
        confirmPassword,
        number,
        dob,
        email,
        isAuthenticated, // Expose isAuthenticated
        authToken, // Expose token
        setUserDetails,
        clearUserDetails,
        getToken, // Expose getToken function
        setAuthTrue
      }}
    >
      {children}
    </UserContext.Provider>
  );
};