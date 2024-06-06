import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Board from "./pages/BusinessBoard";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Pending from "./components/AcceptPersonal/Pending";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import Reservation from "./pages/Reservation";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register-admin" element={<Register isAdmin="admin" />} />
        <Route path="/register-resident" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        

        <Route path="/reservation" element={<Reservation />} />

        <Route path="/list-admin" element={<Pending />} />

         <Route path="/profile" element={<Profile />} /> {/* /:idUser */}

        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
