import React from "react";
import Header from "../../components/Header";
import LeftMenu from "../../components/LeftMenu";

const Dashboard = () => {
  return (
    <>
      <Header />

      <div style={{ display: "flex", position: "relative" }}>
        <LeftMenu />
        <div
          className="dashboard"
          style={{ padding: "1rem", paddingLeft: "80px" }}
        >
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
