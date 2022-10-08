import React from "react";
import "./sidebar.scss";
import { ArrowDropDown, Dashboard } from "@mui/icons-material";
import SubMenu from "./SubMenu";
import ISidebarData from "../../interfaces/sideBarDataInterface";

const sidebarData: ISidebarData[] = [
  {
    name: "CUSTOMERS",
    sub: [
      {
        name: "Users",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Guarantors",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Loans",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Decision Models",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Savings",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Loan Requests",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Whitelist",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Karma",
        path: "/",
        Icon: Dashboard,
      },
    ],
  },
  {
    name: "BUSINESSES",
    sub: [
      {
        name: "Organization",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Loan Products",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Savings Product",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Fees and Charges",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Transactions",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Services",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Service Account",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Settlements",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Reports",
        path: "/",
        Icon: Dashboard,
      },
    ],
  },
  {
    name: "SETTINGS",
    sub: [
      {
        name: "Preferences",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Fees and Pricing",
        path: "/",
        Icon: Dashboard,
      },
      {
        name: "Audit Logs",
        path: "/",
        Icon: Dashboard,
      },
    ],
  },
];

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="switch-organization">
        <Dashboard />
        <p className="main-item-name"> Switch Organization</p>
        <ArrowDropDown className="arrow" />
      </div>

      <div className="dashboard">
        <Dashboard className="main-item-icon" />
        <p className="main-item-name"> Dashboard</p>
      </div>

      {sidebarData?.map((item, id) => {
        let { sub } = item;
        return (
          <div key={id} className="main-item">
            <p className="main-item-name"> {item.name}</p>

            {sub?.map((subMenuItem, id) => {
              let { name, path, Icon } = subMenuItem;
              return <SubMenu key={id} name={name} path={path} Icon={Icon} />;
            })}
          </div>
        );
      })}

      <div className="logout">
        <Dashboard />
        <p className="main-item-name"> Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
