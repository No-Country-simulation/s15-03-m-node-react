import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./components/Error404";

function App() {
  return (
    <>
      <Routes>
        {/* Ruta principal de la app, no hace falta aclararla en el BrowserRouter */}
        <Route path="/" element={<Home />} />

        {/* Cualquier otra ruta que nosotros no le demos al router de react va directamente a error y desde aca lo podemos mandar al home o algun otro lado */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
