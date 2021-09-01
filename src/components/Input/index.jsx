import React from "react";
import "./styles.scss";
const Input = ({ label = "", id = "", type = "text" }) => {
  return (
    <div className="d-grid-left">
      <div className="label">
        <label htmlFor={id}>{label}</label>
      </div>
      <input id={id} className="input-field" type={type} />
    </div>
  );
};

export default Input;
