import React from "react";
import './CurrentlyReading.css'; // Import the CSS file

const CurrentlyReading = () => {
  return (
    <div className="current-reading-container">
        <div className="inner-current-reading-container">

      <div className="left-side">
        <h1>Harry Potter</h1>
        <p>Continue Reading</p>
      </div>
      <div className="right-side">
        <img className="book-image" src="https://ew.com/thmb/W-tJTEPg1bib_coJZjrN3d_75rg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9781408855713-c5b0594eaaa2497aac2e003b7fd2fbd4.jpg" alt="Book" />
      </div>
        </div>
    </div>
  );
};

export default CurrentlyReading;
