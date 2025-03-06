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
      console.log("sss");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    if (!username || !password) {
      setMessage("Please enter both username and password.");
      triggerShake();
      setLoading(false);
      return;
    }

    try {
      const { data: users } = await axios.get("https://smarthub-server.onrender.com/users");
      const user = users.find((u) => u.username === username && u.password === password);

      if (user) {
        setUserDetails({
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          password: user.password,
          confirmPassword: user.confirmPassword,
          phone: user.phone,
          dob: user.dob,
          email: user.email,
        });
      } else {
        setMessage("User not found. Please try again.");
        triggerShake();
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
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
