// src/App.js
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./components/Error404";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import Login from "./pages/Login/Login"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register-admin" element={<Register isAdmin="admin" />} />
        <Route path="register-resident" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;

