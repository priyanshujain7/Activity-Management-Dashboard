import React from "react";
import "../LeftMenu/styles.scss";
import employees from "../../assets/images/employees.png";
import leftMenuData from "../../utils/constants/config";

const LeftMenu = () => {
  return (
    <>
      <div className="left-menu d-md-block d-sm-none">
        {leftMenuData.map((item, idx) => {
          const { href, src, label } = item || {};
          return (
            <a className="link-prop" href={href} target="_blank">
              <div className="label-group">
                <img src={src} alt="Link" />
                <span className="label-text">{label}</span>
              </div>
            </a>
          );
        })}
      </div>

      <div className="m-left-menu d-block d-sm-none">
        <a className="m-link-prop" href="www.google.com">
          <div className="m-label-group">
            <img src={employees} alt="Link" />
            <span className="m-label-text">Google</span>
          </div>
        </a>
      </div>
    </>
  );
};

export default LeftMenu;
