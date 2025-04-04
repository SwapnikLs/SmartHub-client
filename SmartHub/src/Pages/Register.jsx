import React, { useState,useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaTimes, FaCheck } from "react-icons/fa";
import "../Components/RegisterPageComponents/Register.css";
import registerlibrary from "../assets/loginlibrary.jpg"
import ProgressBar from "../Components/GlobalComponents/ProgressBar/ProgressBar";
import { checkUsernameAvailability, registerUser } from "../Service/Api";
const Registration = () => {
  const [username, setUsername] = useState("");
const [isusernameValid, setIsusernameValid] = useState(false);
const [firstname, setfirstname] = useState("");
const [lastname, setlastname] = useState("");

const [email, setEmail] = useState("");

const [number, setnumber] = useState("");
const [isnumberValid,setIsnumberValid] = useState(null);
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
  
    if (/^\S+@\S+\.\S+$/.test(value)) {
      setEmailSuccess("Perfect");
      setEmailError(""); 
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
      setEmailSuccess(""); 
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
  
    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);
    const hasSpecialChar = /[\W_]/.test(newPassword);
    const lengthCheck = newPassword.length >= 8;
  
    let strength = "weak";
    let message = "Too weak";
    let messageClass = "weak-message";
  
    if (lengthCheck && (hasUpperCase || hasNumber || hasSpecialChar)) {
      strength = "medium";
      message = "Could be stronger";
      messageClass = "medium-message";
    }
  
    if (lengthCheck && hasUpperCase && hasNumber && hasSpecialChar) {
      strength = "strong";
      message = "Strong password";
      messageClass = "strong-message";
    }
  
    setPasswordStrength(strength);
    setPasswordMessage(message);
    setPasswordMessageClass(messageClass);
  };
  

  const changenumber = (e) => {
    const value = e.target.value;
    setnumber(value);
  
    if (value === "") {
      setIsnumberValid(null);
    } else if (/^[0-9]{10}$/.test(value)) {
      setIsnumberValid("perfect");
    } else {
      setIsnumberValid(null);
    }
  };
  
  const validatenumber = () => {
    if (!number.trim()) {
      setIsnumberValid(null);
      return;
    }
    setIsnumberValid(/^[0-9]{10}$/.test(number) ? "valid" : "invalid");
  };
  

  const debounceTimer = useRef(null);

  
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setUsernameAvailabilityLoading(true);

    // Clear previous debounce timer
    clearTimeout(debounceTimer.current);

    if (value.length < 6) {
      setshake(true);
      setTimeout(() => setshake(false), 500);
      setUsernameAvailability(false);
      setUsernameAvailabilityLoading(false);
      return;
    }

    // Set a new debounce timer
    
    debounceTimer.current = setTimeout(async () => {
      const availability = await checkUsernameAvailability(value);
      setUsernameAvailability(availability);
      setUsernameAvailabilityLoading(false);
    }, 1000); // Reduced delay to 1s for better UX
  };
  
  const [shake, setshake] = useState(false)
  const [startLoading, setStartLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStartLoading(false);
    if (
      firstname &&
      lastname &&
      !emailError &&
      isnumberValid === "valid" &&
      passwordStrength.toLowerCase() === "strong" &&
      password === confirmpassword
    ) {
      try {
        const userData = { username,firstname, lastname, email, number, dob, password };

        await registerUser(userData); // Call API function
        setTimeout(() => setStartLoading(true), 10);
        setIsSuccessModalOpen(true);
        setTimeout(() => {
          setIsSuccessModalOpen(false);
          navigate("/login");
        }, 2000);
      } catch (err) {
        setError(`❌ ${err}`);
      }
    } else {
      setError("❌ Please fill all fields correctly before submitting");
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
          {error && <p className={`error ${shake ? "shake" : ""}`}>{error}</p>}

          <form onSubmit={handleSubmit}>
          <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
          <input
  type="text"
  placeholder="User Name"
  value={username}
  onChange={handleUsernameChange}
  className={`input-field1 ${usernameAvailability === null ? "" : usernameAvailability ? "success" : "error"}`}
  
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
    placeholder="number"
    value={number}
    onChange={changenumber}
    onBlur={validatenumber}
    className={`input-field1`}
    style={{
      borderColor:
      isnumberValid === null
      ? ""
      : isnumberValid === "valid" || isnumberValid === "perfect"
      ? "green"
      : "red",
    }}
    
    />
  
  <div
    className={`fade-in1 ${isnumberValid ? "show" : ""} ${isnumberValid !== "valid" && isnumberValid !== "perfect" && shake?"shake":""}`} // Add 'show' class when valid
    style={{
      color:
      isnumberValid === "valid" || isnumberValid === "perfect" ? "green" : "red",
    }}
    >
    {isnumberValid === "perfect"
      ? "✔ Perfect"
      : isnumberValid === "valid"
      ? "✔ Valid number number"
      : isnumberValid === "invalid"
      ? "✖ Invalid number number"
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
      
    </div>
      </>
  );
};

// Helper function to map keys to readable text


export default Registration;
