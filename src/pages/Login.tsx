import React, { useState } from "react";
import "../styles/login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] =
    useState<React.SetStateAction<boolean>>(false);
  const [email, setEmail] = useState<string | number>("");
  const [password, setPassword] = useState<string | number>("");

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <div className="left">
        <div className="logo-container">
          <img className="logo" src="lendsqrLogo.png" alt="logo" />
        </div>
        <div className="pablo-container">
          <img className="pablo" src="pablo.png" alt="pablo" />
        </div>
      </div>
      <div className="right">
        <div className="header-login">
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
        </div>

        <form className="form">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email"
            type={"text"}
            placeholder="Email"
          />

          <div className="password-container">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <div className="toggle" onClick={togglePassword}>
              SHOW
            </div>
          </div>

          <p>
            <Link className="link" to="/forgotPassword">
              FORGOT PASSWORD?
            </Link>
          </p>

          <button className="button">LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
