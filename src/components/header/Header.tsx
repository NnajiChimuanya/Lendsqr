import React, { useContext } from "react";
import "./header.scss";
import {
  SearchOutlined,
  NotificationsOutlined,
  ArrowDropDown,
  DensityMedium,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { Logo } from "../../svgs";
import { LendsqrContext } from "../../context/Context";

const Header = () => {
  const { state, dispatch } = useContext(LendsqrContext);
  const { showSidebar } = state;
  console.log(showSidebar);

  return (
    <div className="header">
      <div className="logo">
        {/* <img className="logo" src={log} alt="logo" /> */}
        <Logo className="logo-svg" />
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
      <div className="toggle-container">
        <DensityMedium
          onClick={() => {
            dispatch({ type: "SET_SHOW_SIDEBAR", payload: !showSidebar });
          }}
          className="toggle-icon"
        />
      </div>
    </div>
  );
};

export default Header;
