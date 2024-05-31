import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./context/Context";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Board from "./pages/BusinessBoard";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import AceptManagment from "./pages/Admin/AceptManagment";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register-admin"
            element={<Register isAdmin="admin" />}
          />
          <Route path="/register-resident" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-mangment" element={<AceptManagment />} />
          <Route path="/profile" element={<Profile />} /> {/* /:idUser */}
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
