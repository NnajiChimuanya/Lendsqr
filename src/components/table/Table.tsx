import React, { useState, useEffect } from "react";
import { FilterList, MoreVert } from "@mui/icons-material";
import "./table.scss";
import { Link } from "react-router-dom";
import { Eye, UserTime, UserCheck } from "../../svgs";
import ITableHeaders from "../../interfaces/tableHeaders";
import IUser from "../../interfaces/user";
import { Button } from "@mui/material";
import Active from "../tags/Active";
import Inactive from "../tags/Inactive";
import Blacklist from "../tags/Blacklist";
import Pending from "../tags/Pending";
import { size } from "lodash";

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

interface TableProps {
  paginatedPost: IUser[] | undefined;
}

const Table: React.FC<TableProps> = ({ paginatedPost }) => {
  const [hide, setHide] = useState<React.SetStateAction<boolean>>(true);
  const [hideFilter, setHideFilter] =
    useState<React.SetStateAction<boolean>>(true);
  const [clicked, setClicked] =
    useState<React.SetStateAction<number | undefined>>();

  return (
    <div>
      <div className={`${!hideFilter ? "filter-modal" : "hide-filter"}`}>
        <div className="organization-container">
          <label>Organization</label>
          <select name="">
            <option value={""}>select</option>
            <option value={""}>Organization 1</option>
            <option value={""}>Organization 2</option>
            <option value={""}>Organization 3</option>
          </select>
        </div>

        <div className="username">
          <label>Username </label>
          <input type="text" placeholder="User" />
        </div>

        <div className="email">
          <label>Email </label>
          <input type="email" placeholder="Email" />
        </div>

        <div className="date">
          <label>Date </label>
          <input type="date" placeholder="Date" />
        </div>

        <div className="number">
          <label>Phone Number </label>
          <input type="number" placeholder="Phone Number" />
        </div>

        <div className="status">
          <label>Status </label>
          <select name="" id="">
            <option value="">Select</option>
            <option value="">Active</option>
            <option value="">Inactive</option>
            <option value="">Pending</option>
            <option value="">Blacklisted</option>
          </select>
        </div>

        <div className="buttons">
          <Button onClick={() => setHideFilter(!hideFilter)} className="reset">
            Reset
          </Button>
          <Button onClick={() => setHideFilter(!hideFilter)} className="filter">
            Filter
          </Button>
        </div>
      </div>

      <table className="main-table">
        <tr className="table-header">
          {tableHeaders.map((item, id) => {
            return (
              <th className="table-header" key={id}>
                <div>
                  {item.name}
                  <FilterList
                    onClick={() => setHideFilter(!hideFilter)}
                    className="filter-icon"
                  />
                </div>
              </th>
            );
          })}
        </tr>
        {paginatedPost?.map((item: IUser, index: number) => {
          let {
            orgName,
            userName,
            email,
            phoneNumber,
            createdAt,
            id,
            lastActiveDate,
          } = item;
          let userId: number = Number(id);
          return (
            <tr className="table-data" key={id}>
              <td>{orgName}</td>
              <td>{userName}</td>
              <td>{email}</td>
              <td>{phoneNumber}</td>
              <td>{new Date(createdAt).toUTCString()}</td>
              <td>
                <div className="status">
                  {Number(id) % 2 == 0 ? (
                    <Active />
                  ) : Number(id) % 3 == 0 ? (
                    <Pending />
                  ) : Number(id) % 10 == 0 ? (
                    <Inactive />
                  ) : (
                    <Blacklist />
                  )}
                  <MoreVert
                    className="icon"
                    onClick={() => {
                      setClicked(userId);
                      setHide(!hide);
                    }}
                  />
                </div>

                <div
                  className={`${
                    !hide && userId === clicked ? "modal" : "hide"
                  }`}
                >
                  <div className="modal-items">
                    <Eye />
                    <Link className="link" to={`userDetails/${userId}`}>
                      <p>View Details</p>
                    </Link>
                  </div>

                  <div className="modal-items">
                    <UserTime />
                    <p>Blacklist User</p>
                  </div>

                  <div className="modal-items">
                    <UserCheck />
                    <p> Activate User</p>
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
