import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./components/Error404";
import Register from "./pages/Register";
// import ResidentRegistration from "./pages/ResidentRegistration/ResidentRegistration";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        
        {/* Ruta principal de la app, no hace falta aclararla en el BrowserRouter */}
        <Route path="/" element={<Home />} />
         
<<<<<<< HEAD
        <Route path="/register-admin" element={<AdminRegister />} />
        {/* <Route path="/register-resident" element={<ResidentRegistration/>}/> */}
        <Route path="/login" element={<Login />} />
=======
        <Route path="/register-admin" element={<Register isAdmin="admin" />} />
        <Route path="/register-resident" element={<Register />} />
>>>>>>> c1bc3bcadf2c352c12c1158786f004feae7c02b9

        {/* Cualquier otra ruta que nosotros no le demos al router de react va directamente a error y desde aca lo podemos mandar al home o algun otro lado */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;