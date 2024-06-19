import { Navigate, Route, Routes } from "react-router-dom";
import Context from "./context/Context";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Board from "./pages/BusinessBoard";
import Register from "./pages/Register";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import Reservation from "./pages/Reservation";
import NeigborGroup from "./pages/NeigborGroup";
import AceptManagment from "./pages/Admin/AceptManagment";
import IncidentReport from "./pages/IncidentReport/IncidentReport";
import { useContext } from "react";
import WelcomeResident from "./components/Welcome/WelcomeResident";
import WelcomeAdmin from "./components/Welcome/WelcomeAdmin";
import WelcomeNavAdmin from "./components/WelcomeNavigation/WelcomeNavAdmin";
import WelcomeNavResident from "./components/WelcomeNavigation/WelcomeNavResident";

function App() {
  const { authTokens } = useContext(Context);

  const RequireAuth = ({ children }) => {
    return authTokens ? children : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-admin" element={<Register isAdmin />} />
        <Route path="/register-resident/:code" element={<Register />} />
        <Route
          path="/board"
          element={
            <RequireAuth>
              <Board />
            </RequireAuth>
          }
        />
        <Route
          path="/welcome-resident"
          element={
            <RequireAuth>
              <WelcomeResident />
            </RequireAuth>
          }
        />
        <Route
          path="/welcome-admin"
          element={
            <RequireAuth>
              <WelcomeAdmin />
            </RequireAuth>
          }
        />
        <Route
          path="/list-admin"
          element={
            <RequireAuth>
              <AceptManagment />
            </RequireAuth>
          }
        />
        <Route
          path="/profile/:idUser"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/reservation"
          element={
            <RequireAuth>
              <Reservation />
            </RequireAuth>
          }
        />
        <Route
          path="/neigbor-group"
          element={
            <RequireAuth>
              <NeigborGroup />
            </RequireAuth>
          }
        />
        <Route
          path="/incident-report"
          element={
            <RequireAuth>
              <IncidentReport />
            </RequireAuth>
          }
        />
        <Route
          path="/welcome-nav-admin"
          element={
            <RequireAuth>
              <WelcomeNavAdmin />
            </RequireAuth>
          }
        />
        <Route
          path="/welcome-nav-resident"
          element={
            <RequireAuth>
              <WelcomeNavResident />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;

