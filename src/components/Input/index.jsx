import React from "react";
import "./styles.scss";
const Input = ({ label = "", id = "", type = "text", placeholder = "" }) => {
  return (
    <div className="d-grid-left">
      <div className="label">
        <label htmlFor={id}>{label}</label>
      </div>
      <input
        id={id}
        className="input-field"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
