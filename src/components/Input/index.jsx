import React from "react";
import "./styles.scss";
const Input = ({ label = "", id = "", type = "text" }) => {
  return (
    <div className="row">
      <div className="label col-12">
        <label htmlFor={id}>{label}</label>
      </div>
      <div className="col-12">
        <input id={id} className="input-field" type={type} />
      </div>
    </div>
  );
};

export default Input;
