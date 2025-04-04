import React from "react";
import "./CarouselButton.css"; // Import the styles

const CarouselButton = ({ text, onClick, type = "button" }) => {

  return (
    <button className="custom-button" onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default CarouselButton;
