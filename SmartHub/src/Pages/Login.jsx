import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Components/LoginPageComponents/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showRegisterButton, setShowRegisterButton] = useState(false);
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setShowRegisterButton(false);

    if (!email || !password) {
      setMessage("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/users");
      const users = response.data;
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate("/Explore"); // Redirect to dashboard
        }, 2000);
      } else {
        setMessage("User not found. Please register first.");
        setShowRegisterButton(true);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form">
          <h2>Login to Your Account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <button type="submit" className="dark-button">Login</button>
          </form>

          {/* Show Register Button if User Not Found */}
          {showRegisterButton && (
            <div className="register-section">
              <p>New here? Create an account</p>
              <button className="dark-button" onClick={() => navigate("/register")}>
                Register
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Popup Message for Login Success */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Login Successful! 🎉</h3>
            <p>Redirecting...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
