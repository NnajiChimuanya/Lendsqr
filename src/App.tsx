import React, { useContext } from "react";
import "./styles/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
import { LendsqrContext } from "./context/Context";

function App() {
  const { state, dispatch } = useContext(LendsqrContext);
  let { loggedIn } = state;
  return (
    <Routes>
      <Route path="/" element={loggedIn ? <Dashboard /> : <Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userDetails/:id" element={<UserDetails />}>
        <Route path="userDetails/documents" element={<UserDetails />} />
        <Route path="userDetails/bankDetails" element={<UserDetails />} />
        <Route path="userDetails/loans" element={<UserDetails />} />
        <Route path="userDetails/savings" element={<UserDetails />} />
        <Route path="userDetails/appAndSystem" element={<UserDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
