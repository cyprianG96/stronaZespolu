import React, { Component } from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal-display-block" : "modal-display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-div">
        {children}
        <button className="close" onClick={handleClose}>
          <i className="fas fa-times" />
        </button>
      </section>
    </div>
  );
};

export default Modal;
