import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userDetails" element={<UserDetails />}>
          <Route path="userDetails/documents" element={<UserDetails />} />
          <Route path="userDetails/bankDetails" element={<UserDetails />} />
          <Route path="userDetails/loans" element={<UserDetails />} />
          <Route path="userDetails/savings" element={<UserDetails />} />
          <Route path="userDetails/appAndSystem" element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
