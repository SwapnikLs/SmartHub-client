import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaTimes, FaCheck } from "react-icons/fa";
import "../Components/RegisterPageComponents/Register.css";
import registerlibrary from "../assets/loginlibrary.jpg"
import ProgressBar from "../Components/GlobalComponents/ProgressBar/ProgressBar";
const Registration = () => {
  const [username, setUsername] = useState("");
const [isusernameValid, setIsusernameValid] = useState(false);
//usernameavailability
const [firstname, setfirstname] = useState("");
const [lastname, setlastname] = useState("");

const [email, setEmail] = useState("");

const [phone, setPhone] = useState("");
const [isPhoneValid,setIsPhoneValid] = useState(null);
const [dob, setDob] = useState("");

const [password, setPassword] = useState("");

const [confirmpassword, setconfirmpassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isMatch, setisMatch] = useState(false);
  const [usernameAvailability, setUsernameAvailability] = useState(null);
  const [usernameAvailabilityLoading, setUsernameAvailabilityLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState("");
  const changeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  
    // While typing, show "Perfect" if valid
    if (/^\S+@\S+\.\S+$/.test(value)) {
      setEmailSuccess("Perfect");
      setEmailError(""); // Clear any previous error
    }
    else{
      setEmailSuccess("");

    }
  };
  
  const validateEmail = () => {
    if (email === "") {
      setEmailSuccess("");
      setEmailError("");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("❌ Oops! That doesn’t look like a valid email.");
      setEmailSuccess(""); // Clear success message
    } else {
      setEmailSuccess("✅ Looks good! Your email format is correct.");
      setEmailError("");
    }
  };
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordMessageClass, setPasswordMessageClass] = useState("");
  const [passwordCriteria, setPasswordCriteria] = useState({
    minLength: false,
    lowercase: false,
    uppercase: false,
    specialChar: false,
    number: false,
    notEmail: false
  });

  const checkPasswordStrength = (value) => {
    let strength = "";
    const lengthCheck = value.length >= 8;
    const lowercaseCheck = /[a-z]/.test(value);
    const uppercaseCheck = /[A-Z]/.test(value);
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const notEmailCheck = email && !value.includes(email.split("@")[0]);

    if (lengthCheck && lowercaseCheck && uppercaseCheck && specialCharCheck && numberCheck && notEmailCheck) {
      strength = "Strong 💪";
    } else if (lengthCheck && (lowercaseCheck || uppercaseCheck) && (specialCharCheck || numberCheck)) {
      strength = "Medium ⚠️";
    } else {
      strength = "Weak ❌";
    }

    setPasswordStrength(strength);
    setPasswordCriteria({
      minLength: lengthCheck,
      lowercase: lowercaseCheck,
      uppercase: uppercaseCheck,
      specialChar: specialCharCheck,
      number: numberCheck,
      notEmail: notEmailCheck
    });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  
    let strength = "weak";
    let message = "Too weak";
    let messageClass = "weak-message";
  
    if (newPassword.length > 5) {
      strength = "medium";
      message = "Could be stronger";
      messageClass = "medium-message";
    }
    if (newPassword.length > 8 && /[A-Z]/.test(newPassword) && /\d/.test(newPassword) && /[\W_]/.test(newPassword)) {
      strength = "strong";
      message = "Strong password";
      messageClass = "strong-message";
    }
  
    setPasswordStrength(strength);
    setPasswordMessage(message);
    setPasswordMessageClass(messageClass);
  };

  const changePhone = (e) => {
    const value = e.target.value;
    setPhone(value);
  
    if (/^[0-9]{10}$/.test(value)) {
      setIsPhoneValid("perfect"); // Show "Perfect" while typing only if valid
    } else {
      setIsPhoneValid(null); // No message if invalid while typing
    }
  };
  
  const validatePhone = () => {
    if (phone === "") {
      setIsPhoneValid(null); // No message if empty
    } else {
      setIsPhoneValid(/^[0-9]{10}$/.test(phone) ? "valid" : "invalid"); // Shows valid/invalid on blur
    }
  };
  let debounceTimer = null; // Declaring debounce timer outside to ensure it persists between renders

  const checkUsernameAvailability = async (value) => {
      if (!value.trim()) return false; // Return false if empty input

      try {
          const response = await axios.get(`http://localhost:8080/api/auth/check-username?username=${value}`);
          return response.data.available; // Assuming API returns { available: true/false }
      } catch (error) {
          console.error("Error checking username availability:", error);
          return false; // Default to false if request fails
      }
  };

  const handleUsernameChange = (e) => {
      const value = e.target.value;
      setUsername(value);
      setUsernameAvailabilityLoading(true); // Show spinner

      // Clear the previous debounce timer
      clearTimeout(debounceTimer);

      // Set a new debounce timer for 2 seconds
      debounceTimer = setTimeout(async () => {
          const availability = await checkUsernameAvailability(value);
          setUsernameAvailability(availability); // Set availability once fetched
          setUsernameAvailabilityLoading(false); // Hide spinner after checking
      }, 2000); // Delay check by 2 seconds after typing stops
  };

  const [shake, setshake] = useState(false)
  const [startLoading, setStartLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStartLoading(false); // Reset first
    setTimeout(() => setStartLoading(true), 10);
  
    if (
      usernameAvailability &&
      firstname &&
      lastname &&
      !emailError &&
      isPhoneValid === "valid" &&
      passwordStrength.toLowerCase() === "strong" &&
      password === confirmpassword
    ) {
      try {
        // 1️⃣ Register the user directly (backend handles validation)
        const userData = { username, firstname, lastname, email, phone, dob, password };
  
        await axios.post("http://localhost:8080/api/auth/register", userData);
  
        // 2️⃣ Success - Show modal & redirect to login
        setIsSuccessModalOpen(true);
        setTimeout(() => {
          setIsSuccessModalOpen(false);
          navigate("/login");
        }, 2000);
        
      } catch (err) {
        if (err.response) {
          // 🔥 Handle structured backend error response
          setError(`❌ ${err.response.data.message}`);
        } else {
          setError("❌ Registration failed. Please try again later.");
        }
      }
    } else {
      console.log("Validation failed!");
      setshake(true);
    }
  
    setTimeout(() => {
      setshake(false);
    }, 300);
  };
  
const backgroundImageStyle = {
    width: '50%',
    backgroundImage: `url(${registerlibrary})`, // Specify the path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (<>
      <ProgressBar start={startLoading}/>
    <div className="registration-container">
      <div className="registration-left">
        <div className="registration-form">
          <h2>Create Your Account</h2>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <form onSubmit={handleSubmit}>
          <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
          <input
  type="text"
  placeholder="User Name"
  value={username}
  onChange={handleUsernameChange}
  className={`input-field1 ${usernameAvailability == null ? "":(usernameAvailability?"success":"error")}`}
  
  style={{
    width: "100%",
    paddingRight: "50px",
  }}
/>

      {usernameAvailabilityLoading ? (
        <span className="loader"></span> // Spinner while checking
      ) : usernameAvailability !== null ? (
        <span
          className={`fade-in-from-left ${!usernameAvailability &&shake?"shake":""}`}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: usernameAvailability ? "green" : "red",
            fontSize: "14px",
            pointerEvents: "none",
          }}
        >
          {usernameAvailability ? "✔ Available" : "✖ Not Available"}
        </span>
      ) : null}
    </div>        <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setfirstname(e.target.value)} className={`input-field1 ${firstname!=""&&"success"}`}  />
            <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setlastname(e.target.value)} className={`input-field1 ${lastname !=""&&"success"}`}  />
            <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={changeEmail}
  onBlur={validateEmail}
  className={`input-field1 ${emailError ? "error" : emailSuccess ? "success" : ""}`}
/>

{emailError && <p className={`error-message fade-in ${shake && "shake"}`}>{emailError}</p>}
{emailSuccess && <p className="success-message fade-in">{emailSuccess}</p>}

      <div>
  <input
    type="tel"
    placeholder="Phone"
    value={phone}
    onChange={changePhone}
    onBlur={validatePhone}
    className={`input-field1`}
    style={{
      borderColor:
      isPhoneValid === null
      ? ""
      : isPhoneValid === "valid" || isPhoneValid === "perfect"
      ? "green"
      : "red",
    }}
    
    />
  
  <div
    className={`fade-in1 ${isPhoneValid ? "show" : ""} ${isPhoneValid !== "valid" && isPhoneValid !== "perfect" && shake?"shake":""}`} // Add 'show' class when valid
    style={{
      color:
      isPhoneValid === "valid" || isPhoneValid === "perfect" ? "green" : "red",
    }}
    >
    {isPhoneValid === "perfect"
      ? "✔ Perfect"
      : isPhoneValid === "valid"
      ? "✔ Valid phone number"
      : isPhoneValid === "invalid"
      ? "✖ Invalid phone number"
      : ""}
  </div>
</div>


            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className={`input-field1 ${dob?"success":""}`}  />
            <div className="password-container">
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={handlePasswordChange}
    className={`input-field1  ${passwordStrength.toLowerCase()=="weak"?"password-weak" : passwordStrength.toLowerCase()=="medium"
      ? "password-medium":passwordStrength.toLowerCase()=="strong"?"password-strong":""
    }`}
    />
 <div className="strength-wrapper">
  <span className={`strength-message ${passwordStrength.toLowerCase()!=="strong"&&shake?"shake":""} ${passwordMessageClass}`}>{passwordMessage}</span>
  <div className="strength-bar">
    <div className={`strength-fill ${passwordStrength.toLowerCase()!=="strong"&&shake?"shake":""} ${passwordStrength.toLowerCase()}`}></div>
  </div>
</div>

</div>

<div className="password-container">
  <input 
    type="password" 
    placeholder="Confirm Password" 
    value={confirmpassword} 
    onChange={(e) => {
      setconfirmpassword(e.target.value);
      setisMatch(password === e.target.value);
    }}        
    className={`input-field1 ${isMatch ? "match" : "mismatch"}`} 
    
    />
  
  {confirmpassword && (
    <span className={`status-text ${isMatch ? "match" : "mismatch"} ${password!==confirmpassword && shake?"shake":""}`}>
      {isMatch ? (
        <>
          <FaCheck className="match-icon" />
          <span> Match </span>
        </>
      ) : (
        <>
          <FaTimes className="mismatch-icon" />
          <span> Do not match </span>
        </>
      )}
    </span>
  )}
</div>

            <button type="submit" onSubmit={handleSubmit} className="dark-button">Register</button>
          </form>
        </div>
      </div>
      <div className="register-right" style={backgroundImageStyle}>
        
      </div>
      {isSuccessModalOpen && (
      <div className="modal">
        <div className="modal-content">
          <h2>{success}</h2>
          <p>Redirecting to login...</p>
        </div>
      </div>
    )}
    </div>
      </>
  );
};

// Helper function to map keys to readable text


export default Registration;
