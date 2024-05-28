// src/App.js
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./components/Error404";
import Board from "./pages/BusinessBoard";
import Register from "./pages/Register";
<<<<<<< HEAD
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
=======
import Dashboard from "./pages/Dashboard";
import Pending from "./components/AcceptPersonal/Pending";

function App() {
  return (
    <>
      <Routes>
        {/* Ruta principal de la app, no hace falta aclararla en el BrowserRouter */}
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />

        <Route path="/register-admin" element={<Register isAdmin="admin" />} />
        <Route path="/register-resident" element={<Register />} />

        {/* Ruta al Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/list-admin" element={<Pending />} />

        {/* Cualquier otra ruta que nosotros no le demos al router de react va directamente a error y desde aca lo podemos mandar al home o algun otro lado */}
>>>>>>> 7d25309fb0f54d61e13025db8740a247a5707ee0
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> 7d25309fb0f54d61e13025db8740a247a5707ee0
