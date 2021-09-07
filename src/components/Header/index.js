import React from "react";
import "./style.scss";
import employees from "../../assets/images/employees.png";
import menu from "../../assets/images/menu.png";

const Header = () => {
  return (
    <>
      <nav className="navbar header-bg header">
        <div className="logo">
          <img
            src={menu}
            alt="|||"
            height="20px"
            className="image-menu d-md-none"
          ></img>
          <h1 className="">LOGO</h1>
        </div>
        <div className="heading">
          <h2> Activity Management Dashboard</h2>
        </div>
        <div className="d-none d-sm-block">
          <img src={employees} alt="user" height="30px" /> Logged in
        </div>
      </nav>

      <div className="spacer" />
    </>
  );
};

export default Header;
