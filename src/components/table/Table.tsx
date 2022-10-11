import React, { useState, useEffect } from "react";
import {
  FilterList,
  ChevronLeft,
  ChevronRight,
  MoreVert,
} from "@mui/icons-material";
import "./table.scss";
import { Link } from "react-router-dom";
import {
  UserTotal,
  ActiveTotal,
  LoanTotal,
  SavingsTotal,
  Eye,
  UserTime,
  UserCheck,
} from "../../svgs";
import ITableHeaders from "../../interfaces/tableHeaders";
import IUser from "../../interfaces/user";

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
  const [clicked, setClicked] =
    useState<React.SetStateAction<number | undefined>>();
  return (
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
      {paginatedPost?.map((item: IUser, index: number) => {
        let { orgName, userName, email, phoneNumber, createdAt, id } = item;
        let userId: number = Number(id);
        return (
          <tr className="table-data" key={id}>
            <td>{orgName}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{createdAt}</td>
            <td>
              <div className="status">
                <p>Status</p>
                <MoreVert
                  className="icon"
                  onClick={() => {
                    setClicked(userId);
                    setHide(!hide);
                  }}
                />
              </div>

              <div
                className={`${!hide && userId === clicked ? "modal" : "hide"}`}
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
  );
};

export default Table;
