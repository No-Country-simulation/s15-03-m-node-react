import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./components/Error404";
import Register from "./pages/Register";
import Pending from "./components/AcceptPersonal/Pending";
// import ResidentRegistration from "./pages/ResidentRegistration/ResidentRegistration";

function App() {
  return (
    <>
      <Routes>
        {/* Ruta principal de la app, no hace falta aclararla en el BrowserRouter */}
        <Route path="/" element={<Home />} />

        <Route path="/register-admin" element={<Register isAdmin="admin" />} />
        <Route path="/register-resident" element={<Register />} />

        <Route path="/list-admin" element={<Pending />} />

        {/* Cualquier otra ruta que nosotros no le demos al router de react va directamente a error y desde aca lo podemos mandar al home o algun otro lado */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
