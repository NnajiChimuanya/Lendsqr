import React from "react";
import "../styles/dashboard.scss";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="main">
        <Sidebar />
        <div className="other">Other</div>
      </div>
    </div>
  );
};

export default Dashboard;
