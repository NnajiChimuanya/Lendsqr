import React from "react";
import "./header.scss";
import {
  SearchOutlined,
  NotificationsOutlined,
  ArrowDropDown,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo" src="lendsqrLogo.png" alt="logo" />
      </div>
      <div className="search-main">
        <div className="search-container">
          <input
            className="search"
            type={"text"}
            placeholder="Search for anything"
          />
        </div>
        <button>
          <SearchOutlined className="search-icon" />
        </button>
      </div>
      <div className="others">
        <div className="docs">
          <Link className="link" to={"/"}>
            Docs
          </Link>
        </div>

        <div className="notification">
          <NotificationsOutlined className="notification-icon" />
        </div>

        <div className="user">
          <Avatar className="user-avatar" src="boy.jpg" alt="boy" />
          <div className="user-details">
            <p> Adedeji </p>
            <ArrowDropDown className="dropdown-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
