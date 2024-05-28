import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./components/Error404";
import Board from "./pages/BusinessBoard";
import Register from "./pages/Register";
import Pending from "./components/AcceptPersonal/Pending";
// import ResidentRegistration from "./pages/ResidentRegistration/ResidentRegistration";
import Dashboard from "./pages/Dashboard";

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
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
