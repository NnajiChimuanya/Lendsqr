import React, { useState } from "react";
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
        menuId: "8767",
        Icon: Dashboard,
      },
      {
        name: "Guarantors",
        path: "/",
        menuId: "876d7",
        Icon: Dashboard,
      },
      {
        name: "Loans",
        path: "/",
        menuId: "8r67",
        Icon: Dashboard,
      },
      {
        name: "Decision Models",
        path: "/",
        menuId: "67",
        Icon: Dashboard,
      },
      {
        name: "Savings",
        path: "/",
        menuId: "8667",
        Icon: Dashboard,
      },
      {
        name: "Loan Requests",
        path: "/",
        menuId: "8737",
        Icon: Dashboard,
      },
      {
        name: "Whitelist",
        path: "/",
        menuId: "1767",
        Icon: Dashboard,
      },
      {
        name: "Karma",
        path: "/",
        menuId: "8067",
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
        menuId: "8gg7",
        Icon: Dashboard,
      },
      {
        name: "Loan Products",
        path: "/",
        menuId: "ii67",
        Icon: Dashboard,
      },
      {
        name: "Savings Product",
        path: "/",
        menuId: "2767",
        Icon: Dashboard,
      },
      {
        name: "Fees and Charges",
        path: "/",
        menuId: "5067",
        Icon: Dashboard,
      },
      {
        name: "Transactions",
        path: "/",
        menuId: "8760",
        Icon: Dashboard,
      },
      {
        name: "Services",
        path: "/",
        menuId: "gh7",
        Icon: Dashboard,
      },
      {
        name: "Service Account",
        path: "/",
        menuId: "87tt",
        Icon: Dashboard,
      },
      {
        name: "Settlements",
        path: "/",
        menuId: "we67",
        Icon: Dashboard,
      },
      {
        name: "Reports",
        path: "/",
        menuId: "df67",
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
        menuId: "87ki",
        Icon: Dashboard,
      },
      {
        name: "Fees and Pricing",
        path: "/",
        menuId: "8cv7",
        Icon: Dashboard,
      },
      {
        name: "Audit Logs",
        path: "/",
        menuId: "87vb",
        Icon: Dashboard,
      },
    ],
  },
];

const Sidebar: React.FC = () => {
  const [active, setActive] = useState<React.SetStateAction<string>>("8767");
  const handleLinkClick = (id: string) => {
    setActive(id);
  };
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
        <Dashboard />
        <p className="main-item-name"> Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
