import React from 'react';
import "./Button.css";

function Button({text}) {
  return (
    <button className="dark-button">
      {text}
    </button>
  );
}

export default Button;
