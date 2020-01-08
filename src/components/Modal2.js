import React, { Component } from "react";

const Modal2 = props => {
  const show2HideClassName = props.show2 ? "newDiv" : "nevDivHide";
  return (
    <div className={show2HideClassName}>
      {props.message}
      <div className="buttonsModal2">
        <button className="back" onClick={props.handleClose}>
          Back
        </button>
        <button className="save">Save</button>
      </div>
    </div>
  );
};

export default Modal2;
