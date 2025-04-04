import React from "react";
import "./Modal.css";

const Modal = ({ show, message, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        {message ? (
          <h3 className="modal-title">{message}</h3> // Show only message
        ) : (
          <div className="modal-buttons">
            <button className="modal-btn confirm" onClick={onConfirm}>Confirm</button>
            <button className="modal-btn cancel" onClick={onCancel}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
