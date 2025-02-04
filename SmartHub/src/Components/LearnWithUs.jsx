import React from "react";
import "../styles/LearnWithUs.css"; // Import CSS for styling
import Button from "./Button";

function LearnWithUs() {
  return (
    <div className="learn-container">
      <div className="bottom-right-box">
        {/* Add your content here */}
        <p>
        Welcome to Smart Knowledge Hub
        </p>
        <div className="button-container">
        <Button text={"Sign Up"}/>
        <Button text={"Log In"}/>
        </div>
      </div>
    </div>
  );
}

export default LearnWithUs;
