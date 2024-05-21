import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={"/"}>
    <Routes>
      <Route element={<App />} path="/" />
    </Routes>
  </BrowserRouter>
);

