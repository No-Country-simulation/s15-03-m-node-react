import { Navigate, Route, Routes } from "react-router-dom";
import { ContextProvider, UseContext } from "./context/Context";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Board from "./pages/BusinessBoard";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import Reservation from "./pages/Reservation";
import WelcomeResident from "./components/WelcomeResident/WelcomeResident";
import WelcomeNavigation from "./components/WelcomeNavigation/WelcomeNavigation";
import NeigborGroup from "./pages/NeigborGroup";
import AceptManagment from "./pages/Admin/AceptManagment";
import IncidentReport from "./pages/IncidentReport/IncidentReport";

function App() {
  const { userCreated } = UseContext;

  const RequireAuth = ({ children }) => {
    return userCreated ? children : <Navigate to="/login" />;
  };

  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-admin" element={<Register isAdmin />} />
          <Route path="/register-resident" element={<Register />} />
          <Route
            path="/board"
            element={
              <RequireAuth>
                <Board />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/welcome"
            element={
              <RequireAuth>
                <WelcomeResident />
              </RequireAuth>
            }
          />
          <Route
            path="/welcome-navigation"
            element={
              <RequireAuth>
                <WelcomeNavigation />
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
            path="/profile" // /:idUser
            element={
              <RequireAuth>
                <Profile />
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
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
