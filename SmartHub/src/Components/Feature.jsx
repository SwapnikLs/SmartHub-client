import React from "react";
import "../styles/Feature.css"
function Feature({image,desc}) {
  return (
    <div className="feature">
      <div className="feature-icon">
        <img src={image} alt="" />
      </div>
      <h3>{desc}</h3>
    </div>
  );
}

export default Feature;
