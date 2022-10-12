import React, { useState, useEffect } from "react";
import "../styles/dashboard.scss";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import {
  FilterList,
  ChevronLeft,
  ChevronRight,
  MoreVert,
} from "@mui/icons-material";
import ITableHeaders from "../interfaces/tableHeaders";
// import { data } from "../data";
import IUser from "../interfaces/user";
import _ from "lodash";
import {
  UserTotal,
  ActiveTotal,
  LoanTotal,
  SavingsTotal,
  Eye,
  UserTime,
  UserCheck,
} from "../svgs";
import { Link } from "react-router-dom";
import Table from "../components/table/Table";
import axios from "axios";

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

const Dashboard: React.FC = () => {
  const [data, setData] = useState<IUser[]>([]);

  useEffect(() => {
    axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => {
        // saving data to local storage
        localStorage.setItem("data", JSON.stringify(res.data));
        setData(JSON.parse(localStorage?.data));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setPaginatedPost(_(data).slice(0).take(pageSize).value());
  }, [data]);

  //Logic for pagination
  const pageSize = 10;
  const pageCount = Math.ceil(data.length / pageSize);
  const pages = _.range(1, pageCount + 1);
  const [paginatedPost, setPaginatedPost] = useState<IUser[]>();
  let [currentPage, setCurrentPage] = useState<number>(1);

  //Paginate function
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * pageSize;
    let paginatedPost = _(data).slice(startIndex).take(pageSize).value();
    setPaginatedPost(paginatedPost);
  };

  const paginateDecrease = (pageNum: number) => {
    if (pageNum > 1) {
      pageNum--;
      setCurrentPage(pageNum);
      const startIndex = (pageNum - 1) * pageSize;
      let paginatedPost = _(data).slice(startIndex).take(pageSize).value();
      setPaginatedPost(paginatedPost);
    }
  };

  const paginateIncrease = (pageNum: number) => {
    if (pageNum < pageCount) {
      pageNum++;
      setCurrentPage(pageNum);
      const startIndex = (pageNum - 1) * pageSize;
      let paginatedPost = _(data).slice(startIndex).take(pageSize).value();
      setPaginatedPost(paginatedPost);
    }
  };

  return (
    <div data-testid="dashboard" className="dashboard">
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
                <span>
                  <UserTotal className="icon" />
                </span>
                <p>Users</p>
                <h4>2,453</h4>
              </div>
              <div className="total-active-users">
                <span>
                  {" "}
                  <ActiveTotal className="icon" />
                </span>
                <p> Active Users</p>
                <h4>2,453</h4>
              </div>
              <div className="total-users-loan">
                <span>
                  {" "}
                  <LoanTotal className="icon" />
                </span>
                <p>Users with Loans</p>
                <h4>12,453</h4>
              </div>
              <div className="total-users-savings">
                <span>
                  {" "}
                  <SavingsTotal className="icon" />
                </span>
                <p>Users with Savings</p>
                <h4>102,453</h4>
              </div>
            </div>

            <div className="table-container">
              <Table paginatedPost={paginatedPost} />

              <nav>
                <ul>
                  <ChevronLeft
                    className="chevron"
                    onClick={(e) => {
                      paginateDecrease(currentPage);
                    }}
                  />
                  {pages.map((number, id) => {
                    return (
                      <li
                        className={`${
                          number === currentPage ? "active" : null
                        }`}
                        onClick={(e: React.MouseEvent<HTMLElement>) => {
                          paginate(number);
                        }}
                        key={id}
                      >
                        {number}
                      </li>
                    );
                  })}
                  <ChevronRight
                    className="chevron"
                    onClick={(e) => {
                      paginateIncrease(currentPage);
                    }}
                  />
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
