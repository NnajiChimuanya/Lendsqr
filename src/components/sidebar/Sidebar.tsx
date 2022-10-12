import React, { useState, useContext } from "react";
import "./sidebar.scss";
import { ArrowDropDown } from "@mui/icons-material";
import SubMenu from "./SubMenu";
import ISidebarData from "../../interfaces/sideBarDataInterface";
import {
  badgePercent,
  Briefcase,
  chartBar,
  clipboardList,
  coinsSolid,
  galaxy,
  group1,
  group104,
  Home,
  icon,
  piggyBank,
  sack,
  scroll,
  slider,
  userFriends,
  UserTime,
  UserCheck,
  userCog,
  users,
  Signout,
} from "../../svgs";
import { Link } from "react-router-dom";
import { LendsqrContext } from "../../context/Context";

const sidebarData: ISidebarData[] = [
  {
    name: "CUSTOMERS",
    sub: [
      {
        name: "Users",
        path: "/",
        menuId: "8767",
        Icon: userFriends,
      },
      {
        name: "Guarantors",
        path: "/",
        menuId: "876d7",
        Icon: users,
      },
      {
        name: "Loans",
        path: "/",
        menuId: "8r67",
        Icon: sack,
      },
      {
        name: "Decision Models",
        path: "/",
        menuId: "67",
        Icon: badgePercent,
      },
      {
        name: "Savings",
        path: "/",
        menuId: "8667",
        Icon: piggyBank,
      },
      {
        name: "Loan Requests",
        path: "/",
        menuId: "8737",
        Icon: group104,
      },
      {
        name: "Whitelist",
        path: "/",
        menuId: "1767",
        Icon: UserCheck,
      },
      {
        name: "Karma",
        path: "/",
        menuId: "8067",
        Icon: UserTime,
      },
    ],
  },
  {
    name: "BUSINESSES",
    sub: [
      {
        name: "Organization",
        path: "/",
        menuId: "8gg7",
        Icon: Briefcase,
      },
      {
        name: "Loan Products",
        path: "/",
        menuId: "ii67",
        Icon: group104,
      },
      {
        name: "Savings Product",
        path: "/",
        menuId: "2767",
        Icon: group1,
      },
      {
        name: "Fees and Charges",
        path: "/",
        menuId: "5067",
        Icon: coinsSolid,
      },
      {
        name: "Transactions",
        path: "/",
        menuId: "8760",
        Icon: icon,
      },
      {
        name: "Services",
        path: "/",
        menuId: "gh7",
        Icon: galaxy,
      },
      {
        name: "Service Account",
        path: "/",
        menuId: "87tt",
        Icon: userCog,
      },
      {
        name: "Settlements",
        path: "/",
        menuId: "we67",
        Icon: scroll,
      },
      {
        name: "Reports",
        path: "/",
        menuId: "df67",
        Icon: chartBar,
      },
    ],
  },
  {
    name: "SETTINGS",
    sub: [
      {
        name: "Preferences",
        path: "/",
        menuId: "87ki",
        Icon: slider,
      },
      {
        name: "Fees and Pricing",
        path: "/",
        menuId: "8cv7",
        Icon: badgePercent,
      },
      {
        name: "Audit Logs",
        path: "/",
        menuId: "87vb",
        Icon: clipboardList,
      },
    ],
  },
];

const Sidebar: React.FC = () => {
  const { state, dispatch } = useContext(LendsqrContext);
  const { showSidebar, loggedIn } = state;

  const [active, setActive] = useState<React.SetStateAction<string>>("8767");
  const handleLinkClick = (id: string) => {
    setActive(id);
  };
  return (
    <div className={`sidebar  ${showSidebar ? "showSideBar" : "hideSideBar"}`}>
      <div className="switch-organization">
        <Briefcase />
        <p className="main-item-name"> Switch Organization</p>
        <ArrowDropDown className="arrow" />
      </div>

      <div className="dashboard">
        <Home className="main-item-icon" />
        <Link to={"/"} className="link">
          {" "}
          Dashboard
        </Link>
      </div>

      {sidebarData?.map((item, id) => {
        let { sub } = item;
        return (
          <div key={id} className="main-item">
            <p className="main-item-name"> {item.name}</p>

            {sub?.map((subMenuItem, id) => {
              let { name, path, Icon, menuId } = subMenuItem;
              return (
                <SubMenu
                  key={id}
                  name={name}
                  path={path}
                  menuId={menuId}
                  Icon={Icon}
                  active={active}
                  handleLinkClick={handleLinkClick}
                />
              );
            })}
          </div>
        );
      })}

      <div className="logout">
        <Signout />
        <p
          onClick={() => {
            dispatch({ type: "SET_LOGIN", payload: false });
          }}
          className="main-item-name"
        >
          {" "}
          Logout
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
