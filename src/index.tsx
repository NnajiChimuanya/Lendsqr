import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { LendsqrContextProvider } from "./context/Context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LendsqrContextProvider>
        <App />
      </LendsqrContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
