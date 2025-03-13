import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../Context/UserContext";
import "../Components/LoginPageComponents/Login.css";
import loginlibrary from "../assets/loginlibrary.jpg";
import ProgressBar from "../Components/GlobalComponents/ProgressBar/ProgressBar";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const navigate = useNavigate();
  const { setUserDetails, isAuthenticated } = useUserContext();

  // ✅ Move navigation logic inside useEffect to avoid rendering errors
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/explore");
    }
  }, [isAuthenticated, navigate]);

const API_URL = "http://localhost:8080";

const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");
  setLoading(true);

  if (!username || !password) {
    setMessage("⚠️ Please enter both username and password.");
    triggerShake();
    setLoading(false);
    return;
  }

  try {
    // ✅ Send login request
    const response = await axios.post(`${API_URL}/api/auth/login`, {
      username,
      password,
    });

    // ✅ Ensure response is structured correctly
    if (response.data.success) {
      const user = response.data.user;

      setUserDetails({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        dob: user.dob, // If needed, format this using moment.js
        email: user.email,
      });

      setMessage("✅ Login successful!");
    } else {
      setMessage("⚠️ Login failed. Please check your credentials.");
      triggerShake();
    }
  } catch (error) {
    if (error.response) {
      const errorData = error.response.data;
      console.log(username);
      console.log(password);
      
      setMessage(`⚠️ ${errorData.message || "Login failed. Please try again."}`);
    } else {
      setMessage("❌ Unable to connect to the server.");
    }
    triggerShake();
  } finally {
    setLoading(false);
  }
};

  
  
  // 🔄 Function to trigger shake effect
  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <>
      <ProgressBar start={loading} />
      <div className="login-container">
        <div className="login-left">
          <div className="login-form">
            <h2>Login to Your Account</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                className="input-field1"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field1"
              />
              {message && <span className={`error ${shake ? "shake" : ""}`}>{message}</span>}
              <button type="submit" className="dark-button">
                Login
              </button>
            </form>
          </div>
          <div className="register-section">
            <p>Not a member? Create an account</p>
            <button className="dark-button" onClick={() => navigate("/register")}>
              Register
            </button>
          </div>
        </div>
        <div className="login-right" style={{ width: '50%', background: `url(${loginlibrary}) center / cover no-repeat` }}></div>
      </div>
    </>
  );
};

export default Login;
