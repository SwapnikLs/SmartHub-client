import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../Context/UserContext"; // Importing UserContext
import "../Components/LoginPageComponents/Login.css";
import loginlibrary from "../assets/loginlibrary.jpg";
import ProgressBar from "../Components/GlobalComponents/ProgressBar/ProgressBar"; // Import the ProgressBar component

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const [nextPath, setNextPath] = useState(null);
  
  const navigate = useNavigate(); // For navigation

  // Destructure the setUserDetails and isAuthenticated from context
  const { setUserDetails, isAuthenticated } = useUserContext();

  const handleNavigateWithDelay = (path) => {
    setNextPath(path);
    setIsLoading(true);
  };
  // If already authenticated, redirect to Explore page
  if (isAuthenticated) {
    navigate("/Explore");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true); // Start loading when the user clicks login

    if (!username || !password) {
      setMessage("Please enter both username and password.");
      setIsLoading(false); // Stop loading on error
      return;
    }

    try {
      const response = await axios.get("https://smarthub-server.onrender.com/users");
      const users = response.data;
      const user = users.find(
        (u) => u.UserName === username && u.password === password
      );

      if (user) {
        // Set user details to the global context
        setUserDetails({
          UserName: user.UserName,
          firstName: user.firstName,
          lastName: user.lastName,
          password: user.password,
          confirmPassword: user.confirmPassword,
          phone: user.phone,
          dob: user.dob,
          email: user.email,
        });
        handleNavigateWithDelay("/explore")
      } else {
        setMessage("User not found. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false); // Stop loading after the process is complete
    }
  };

  const backgroundImageStyle = {
    width: '50%',
    backgroundImage: `url(${loginlibrary})`, // Specify the path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="login-container">
      <ProgressBar 
        isLoading={isLoading} 
        onComplete={() => {
          if (nextPath) {
            navigate(nextPath); // Redirect to the next path
            setIsLoading(false); // Stop loading
          }
        }} 
      />
      <div className="login-left">
        <div className="login-form">
          <h2>Login to Your Account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input-field1"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field1"
            />
            {message && <span className="error">{message}</span>}
            <button type="submit" className="dark-button">
              Login
            </button>
          </form>
        </div>

        {/* Always Show Register Section */}
        <div className="register-section">
          <p>Not a member? Create an account</p>
          <button className="dark-button" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </div>
      <div className="login-right" style={backgroundImageStyle}></div>

      {/* Show ProgressBar when loading */}
    </div>
  );
};

export default Login;
