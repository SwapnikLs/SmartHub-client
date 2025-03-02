import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Components/RegisterPageComponents/Register.css";
import registerlibrary from "../assets/loginlibrary.jpg"
const Registration = () => {
  const [UserName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      // 1️⃣ Check if the user already exists
      const { data } = await axios.get("http://localhost:5000/users");
const userExists = data.some((user) => user.email === email && user.UserName === UserName);

      if (userExists) {
        setError("Account already exists!");
        return;
      }

      // 2️⃣ If not, register the user
      const userData = { UserName,firstName, lastName, email, phone, dob, password };
      await axios.post("http://localhost:5000/users", userData);

      // 3️⃣ Show success & Redirect to Login
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError("Error registering. Please try again.");
    }
  };
const backgroundImageStyle = {
    width: '50%',
    backgroundImage: `url(${registerlibrary})`, // Specify the path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="registration-container">
      <div className="registration-left">
        <div className="registration-form">
          <h2>Create Your Account</h2>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="User Name" value={UserName} onChange={(e) => setUserName(e.target.value)} className="input-field1" />
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input-field1" />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input-field1" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field1" />
            <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="input-field1" />
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="input-field1" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field1" />
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="input-field1" />
            <button type="submit" className="dark-button">Register</button>
          </form>
        </div>
      </div>
      <div className="register-right" style={backgroundImageStyle}>
        
      </div>
    </div>
  );
};

export default Registration;
