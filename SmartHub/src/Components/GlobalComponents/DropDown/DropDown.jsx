import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.css";

const DropDown = ({ options }) => {
  const [selected, setSelected] = useState(options[0]); // Default to first option
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false); // Close dropdown after selection
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`wrapper-dropdown ${open ? "active" : ""}`}>
      <div className="selected-display" onClick={() => setOpen(!open)}>
        {selected}
        <svg
          className={`arrow ${open ? "rotated" : ""}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M7 14.5l5-5 5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
      {open && ( // Ensures dropdown is only rendered when open
        <ul className="dropdown">
          {options.map((option, index) => (
            <li key={index} className="item" onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
