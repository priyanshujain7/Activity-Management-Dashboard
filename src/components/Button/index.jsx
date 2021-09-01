import React from "react";
import "./styles.scss";

const Button = ({ background = "dark", text = "Submit" }) => {
  return (
    <div className="btn-comp m-3">
      <button
        className={`btn ${
          background === "dark" ? "header-bg" : "body-bg"
        } fs-16 text-bold`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
