import React, { useState, useEffect } from "react";
import "../styles/dashboard.scss";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { DashboardCustomizeOutlined, FilterList } from "@mui/icons-material";
import ITableHeaders from "../interfaces/tableHeaders";
import { data } from "../data";
import IUser from "../interfaces/user";
import _ from "lodash";

const tableHeaders: ITableHeaders[] = [
  {
    id: 1,
    name: "ORGANIZATION",
  },
  {
    id: 1,
    name: "USERNAME",
  },
  {
    id: 1,
    name: "EMAIL",
  },
  {
    id: 1,
    name: "PHONE NUMBER",
  },
  {
    id: 1,
    name: "DATE JOINED",
  },
  {
    id: 1,
    name: "STATUS",
  },
];

const Dashboard = () => {
  const pageSize = 10;
  const pageCount = Math.ceil(data.length / pageSize);
  const pages = _.range(1, pageCount);
  const [paginatedPost, setPaginatedPost] = useState<IUser[]>();

  useEffect(() => {
    setPaginatedPost(_(data).slice(0).take(pageSize).value());
  });

  return (
    <div className="dashboard">
      <Header />
      <div className="main">
        <Sidebar />
        <div className="other">
          <div className="overview">
            <div className="title">
              <h4>User Details</h4>
            </div>

            <div className="overview-data">
              <div className="total-users">
                <DashboardCustomizeOutlined />
                <p>Users</p>
                <h4>2,453</h4>
              </div>
              <div className="total-active-users">
                <DashboardCustomizeOutlined />
                <p>Users</p>
                <h4>2,453</h4>
              </div>
              <div className="total-users-loan">
                <DashboardCustomizeOutlined />
                <p>Users</p>
                <h4>2,453</h4>
              </div>
              <div className="total-users-savings">
                <DashboardCustomizeOutlined />
                <p>Users</p>
                <h4>2,453</h4>
              </div>
            </div>

            <div className="table-container">
              <table className="main-table">
                <tr className="table-header">
                  {tableHeaders.map((item, id) => {
                    return (
                      <th className="table-header" key={id}>
                        <div>
                          {item.name}
                          <FilterList className="filter-icon" />
                        </div>
                      </th>
                    );
                  })}
                </tr>
                {paginatedPost?.map((item, id) => {
                  let { orgName, userName, email, phoneNumber, createdAt } =
                    item;
                  return (
                    <tr className="table-data">
                      <td>{orgName}</td>
                      <td>{userName}</td>
                      <td>{email}</td>
                      <td>{phoneNumber}</td>
                      <td>{createdAt}</td>
                      <td>{"Active"}</td>
                    </tr>
                  );
                })}
              </table>

              <nav>
                <ul>
                  {pages.map((number, id) => {
                    return <li key={id}>{number}</li>;
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
