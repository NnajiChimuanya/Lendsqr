import React from "react";
import "../styles/userDetails.scss";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { KeyboardBackspace } from "@mui/icons-material";
import { Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const UserDetails = () => {
  return (
    <div className="userDetails-page">
      <Header />
      <div className="main">
        <Sidebar />
        <div className="user-details">
          <div className="back">
            <Link className="link" to={"/"}>
              <KeyboardBackspace className="back-icon" />
            </Link>
            <p>Back to Users</p>
          </div>

          <div className="header">
            <div className="title">
              <h4>User Details</h4>
            </div>
            <div className="buttons">
              <Button className="button blacklist">Blacklist User</Button>
              <Button className="button activate">Activate User</Button>
            </div>
          </div>

          <div className="section-1">
            <div className="up">
              <div className="user">
                <Avatar className="avatar" />
                <div className="name">
                  <h3>Grace Effiom</h3>
                  <p>LSQFf587g90</p>
                </div>
              </div>

              <div className="user-tier">
                <p>User's tier</p>
              </div>

              <div className="user-balance">
                <p>User's tier</p>
              </div>
            </div>
            {/* <div className="up">
              <div className="user-details">
                <Avatar />
                <div className="name">
                  <h5>Grace Effiom</h5>
                  <p>LSQFf587g90</p>
                </div>
              </div>

              <div className="user-tier">
                <p>User's tier</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
