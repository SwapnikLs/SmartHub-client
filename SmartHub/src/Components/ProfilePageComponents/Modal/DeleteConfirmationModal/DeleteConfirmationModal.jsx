import React from "react";
import "./DeleteConfirmationModal.css"; // You can style it as needed

const ConfirmationModal = ({ show, onConfirm, onCancel }) => {
    if (!show) return null;
  return (
    <div className="confirmation-modal-overlay">
      <div className="confirmation-modal">
        <h3>Are you sure want to remove the account?</h3>
        <div className="modal-buttons">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
