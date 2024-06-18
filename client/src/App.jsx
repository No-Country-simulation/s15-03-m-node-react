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
import WelcomeResident  from "./components/Welcome/WelcomeResident";
import WelcomeAdmin from "./components/Welcome/WelcomeAdmin";
import WelcomeNavResident from "./components/WelcomeNavigation/WelcomeNavResident";
import WelcomeNavAdmin  from "./components/WelcomeNavigation/WelcomeNavAdmin";
import NeigborGroup from "./pages/NeigborGroup";
import IncidentReport from "./pages/IncidentReport/IncidentReport";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-admin" element={<Register isAdmin />} />
        <Route path="/register-resident" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/welcome-resident" element={<WelcomeResident />} />
        <Route path="/welcome-admin" element={<WelcomeAdmin />} />
        <Route path="/welcome-nav-admin" element={<WelcomeNavAdmin />} />
        <Route path="/welcome-nav-resident" element={<WelcomeNavResident />} />
        <Route path="/list-admin" element={<Pending />} />
        <Route path="/incident-report" element={<IncidentReport />} />
        <Route path="/profile" element={<Profile />} /> {/* /:idUser */}
        <Route path="/neigbor-group" element={<NeigborGroup />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
