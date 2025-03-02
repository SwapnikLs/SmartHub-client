import React from "react";
import Button from "../../GlobalComponents/Button/Button"; // Assuming Button is a reusable component
import "./Modal.css"
const Modal = ({ show, onConfirm, onCancel }) => {
  if (!show) return null; // If modal is not visible, return null

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Are you sure you want to save the changes?</h3>
        <div className="modal-buttons">
          <div onClick={onConfirm}>
          <Button text="Confirm" />
          </div>
          <div onClick={onCancel}>
          <Button text="Cancel"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
