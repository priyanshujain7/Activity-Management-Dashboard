import React from "react";
import "../LeftMenu/styles.scss";
import employees from "../../assets/images/employees.png";

const LeftMenu = () => {
  return (
    <div className="left-menu">
      <a className="link-prop" href="www.google.com">
        <div className="label-group">
          <img src={employees} alt="Link" />
          <span className="label-text">Google</span>
        </div>
      </a>
      <a className="link-prop" href="www.google.com">
        <div className="label-group">
          <img src={employees} alt="Link" />
          <span className="label-text">Gemini Solutions</span>
        </div>
      </a>
      <a className="link-prop" href="www.google.com">
        <div className="label-group">
          <img src={employees} alt="Link" />
          <span className="label-text">Amazon</span>
        </div>
      </a>
      <a className="link-prop" href="www.google.com">
        <div className="label-group">
          <img src={employees} alt="Link" />
          <span className="label-text">GLA University</span>
        </div>
      </a>
    </div>
  );
};

export default LeftMenu;
