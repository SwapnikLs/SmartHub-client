import React from "react";
import "./DeleteConfirmation.css"; // You can style it as needed

const Confirmation = ({ show, onConfirm, onCancel }) => {
    if (!show) return null;
  return (
    <div className="confirmation--overlay">
      <div className="confirmation-">
        <h3>Are you sure want to remove the account?</h3>
        <div className="-buttons">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
