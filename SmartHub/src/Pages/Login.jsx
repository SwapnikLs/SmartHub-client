import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../Context/UserContext";
import "../Components/LoginPageComponents/Login.css";
import loginlibrary from "../assets/loginlibrary.jpg";
import ProgressBar from "../Components/GlobalComponents/ProgressBar/ProgressBar";
import { loginUser } from "../Service/Api";
import PdfViewer from "./PdfViewer";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const navigate = useNavigate();
  const { setUserDetails, setAuthTrue,isAuthenticated } = useUserContext();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/explore");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    if (!username || !password) {
      setMessage("⚠️ Please enter both username and password.");
      triggerShake();
      setLoading(false);
      return;
    }

    const result = await loginUser(username, password);

    if (result.success) {
      setUserDetails(result.userDetails);
      setMessage("✅ Login successful!");
      console.log("✅ Login successful!");
      navigate("/explore"); // Redirect to explore page
    } else {
      setMessage(result.message);
      triggerShake();
    }

    setLoading(false);
  };


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
            <form onSubmit={handleLogin}>
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
