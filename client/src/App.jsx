// src/App.js
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./components/Error404";
import Board from "./pages/BusinessBoard";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Pending from "./components/AcceptPersonal/Pending";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout";



function App() {
  return (
    <>
      <Routes>
        {/* Ruta principal de la app, no hace falta aclararla en el BrowserRouter */}
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register-admin" element={<Register isAdmin="admin" />} />
        <Route path="/register-resident" element={<Register />} />

        {/* Ruta al Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/list-admin" element={<Pending />} />

        {/* Cualquier otra ruta que nosotros no le demos al router de react va directamente a error y desde aca lo podemos mandar al home o algun otro lado */}
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
