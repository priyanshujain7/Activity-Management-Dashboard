import React from "react";
import "./styles.scss";

const Button = ({ background = "dark", text = "Submit", click = () => {} }) => {
  return (
    <div className="btn-comp m-3">
      <button
        className={`btn ${background === "dark" ? "header-bg" : "body-bg"}`}
        onClick={() => click()}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
