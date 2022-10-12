import React, { useState, useEffect } from "react";
import "../styles/userDetails.scss";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { KeyboardBackspace, Star } from "@mui/icons-material";
import { Button, Avatar } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import IUserDetailsRoutes from "../interfaces/userDetailsRoutes";
import IUser from "../interfaces/user";
import axios from "axios";

type typeId = {
  id: string;
};

const UserDetails: React.FC = () => {
  const [userData, setUserData] = useState<IUser>();

  const { id } = useParams<typeId>();

  useEffect(() => {
    axios
      .get(
        ` https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      )
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [active, setActive] = useState<React.SetStateAction<number>>(0);

  const handleLinkClick = (id: number) => {
    setActive(id);
  };

  const userDetailsRoutes: IUserDetailsRoutes[] = [
    {
      name: "Documents",
      path: `userDetails/documents`,
    },

    {
      name: "Bank Details",
      path: "userDetails/bankDetails",
    },

    {
      name: "Loan",
      path: "userDetails/loans",
    },

    {
      name: "Savings",
      path: "userDetails/savings",
    },
    {
      name: "App and System",
      path: "userDetails/appAndSystem",
    },
  ];

  return (
    <div className="userDetails-page">
      <Header />

      <div className="main">
        <Sidebar />
        {userData ? (
          <div className="user-details">
            <div className="back">
              <Link className="link" to={"/"}>
                <KeyboardBackspace className="back-icon" />
              </Link>
              <p>Back to Users</p>
            </div>

            <div className="header-user">
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
                  <Avatar
                    src={`${userData?.profile.avatar}`}
                    className="avatar"
                  />
                  <div className="name">
                    <h3>{userData?.userName}</h3>
                    <p>{userData?.accountNumber}</p>
                  </div>
                </div>

                <div className="user-tier">
                  <p>User's tier</p>
                  <Star />
                </div>

                <div className="user-balance">
                  <h2>{`₦ ${userData?.accountBalance}`}</h2>
                  <p>{userData?.accountNumber}</p>
                </div>
              </div>

              <div className="down">
                {userDetailsRoutes.map((item, id) => {
                  let { name, path } = item;
                  return (
                    <div
                      key={id}
                      className={`link-container ${
                        id === active ? `active` : null
                      }`}
                    >
                      <Link
                        onClick={(e: React.MouseEvent<HTMLElement>) => {
                          handleLinkClick(id);
                        }}
                        className="link"
                        to={path}
                      >
                        {name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="section-2">
              <div className="personal-details">
                <h4>Personal Details</h4>
                <div className="details">
                  <div>
                    <p>FULL NAME</p>
                    <h4>{`${userData?.profile.firstName} ${userData?.profile.lastName}`}</h4>
                  </div>

                  <div>
                    <p>Phone number</p>
                    <h4>{userData?.phoneNumber}</h4>
                  </div>

                  <div>
                    <p>Email Address</p>
                    <h4>{userData?.email}</h4>
                  </div>

                  <div>
                    <p>Bvn</p>
                    <h4>{userData?.profile.bvn}</h4>
                  </div>

                  <div>
                    <p>Gender</p>
                    <h4>{userData?.profile.gender}</h4>
                  </div>

                  <div>
                    <p>Marital status</p>
                    <h4>Single</h4>
                  </div>

                  <div>
                    <p> Children</p>
                    <h4>None</h4>
                  </div>

                  <div>
                    <p>Type of residence</p>
                    <h4>Parent's Apartment</h4>
                  </div>
                </div>
              </div>

              <hr />

              <div className="education">
                <h4>Education and Employment</h4>
                <div className="details">
                  <div>
                    <p>level of Education</p>
                    <h4>{userData?.education.level}</h4>
                  </div>

                  <div>
                    <p>Employment status</p>
                    <h4>{userData?.education.employmentStatus}</h4>
                  </div>

                  <div>
                    <p>Sector of Employment</p>
                    <h4>{userData?.education.sector}</h4>
                  </div>

                  <div>
                    <p>Duration of Employment</p>
                    <h4>{userData?.education.duration}</h4>
                  </div>

                  <div>
                    <p>Office Email</p>
                    <h4>{userData?.education.officeEmail}</h4>
                  </div>

                  <div>
                    <p>Monthly income</p>
                    <h4>{`₦${userData?.education.monthlyIncome[0]} - ₦${userData?.education.monthlyIncome[1]}`}</h4>
                  </div>

                  <div>
                    <p> Children</p>
                    <h4>None</h4>
                  </div>

                  <div>
                    <p>loan repayment</p>
                    <h4>{`₦ ${userData?.education.loanRepayment}`}</h4>
                  </div>
                </div>
              </div>

              <hr />

              <div className="socials">
                <h4>Socials</h4>
                <div className="details">
                  <div>
                    <p>Twitter</p>
                    <h4>{userData?.socials.twitter}</h4>
                  </div>

                  <div>
                    <p>Facebook</p>
                    <h4>{userData?.socials.facebook}</h4>
                  </div>

                  <div>
                    <p>Instagram</p>
                    <h4>{userData?.socials.facebook}</h4>
                  </div>
                </div>
              </div>

              <hr />

              <div className="guarantor">
                <h4>Guarantor</h4>
                <div className="details">
                  <div>
                    <p>Full name</p>
                    <h4>{`${userData?.guarantor.firstName} ${userData?.guarantor.lastName}`}</h4>
                  </div>

                  <div>
                    <p>phone number</p>
                    <h4>{userData?.guarantor.phoneNumber}</h4>
                  </div>

                  <div>
                    <p> address</p>
                    <h4>{userData?.guarantor.address}</h4>
                  </div>

                  <div>
                    <p>Relationship</p>
                    <h4>Sister</h4>
                  </div>
                </div>
              </div>

              <hr />

              <div className="user-overall">
                <div className="details">
                  <div>
                    <p>Full name</p>
                    <h4>{`${userData?.guarantor.firstName} ${userData?.guarantor.lastName}`}</h4>
                  </div>

                  <div>
                    <p>phone number</p>
                    <h4>{userData?.guarantor.phoneNumber}</h4>
                  </div>

                  <div>
                    <p>Email address</p>
                    <h4>debby@gmail.com</h4>
                  </div>

                  <div>
                    <p>Relationship</p>
                    <h4>Sister</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "20px",
            }}
          >
            Loading
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
