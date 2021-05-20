import React from "react";
import ReactDOM from "react-dom";

import "./customModal.css";

const Modal = ({ Open, children, onClose }) => {
  if (!Open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-container">
        <div className="close-btn" onClick={onClose}>
          <i className="fas fa-times" />
        </div>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
