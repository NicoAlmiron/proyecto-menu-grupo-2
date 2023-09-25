import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./component/common/Menu";
import Login from "./component/views/Login";
import Register from "./component/views/Register";
import AcercaDeNosotros from "./component/views/AcercaDeNosotros";
import Pedidos from "./component/views/Pedidos";
import Error404 from "./component/views/Error404";
import Footer from "./component/common/Footer";
import Inicio from "./component/views/Inicio";
import EncapsularRutas from "./component/routes/EncapsularRutas";
import { useState } from "react";
import RutasProtegidas from "./component/routes/RutasProtegidas";
import DetalleMenu from "./component/views/DetalleMenu";

function App() {
  const usuarioEnLinea =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || null;

  const [usuarioActivo, setUsuarioActivo] = useState(usuarioEnLinea);
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        {usuarioActivo?.email === "admin@rolling.com" ? (
          <Route
            path="/administrador/*"
            element={
              <EncapsularRutas>
                <RutasProtegidas></RutasProtegidas>
              </EncapsularRutas>
            }
          ></Route>
        ) : null}
        <Route
          exact
          path="/login"
          element={<Login setUsuarioActivo={setUsuarioActivo}></Login>}
        ></Route>
        <Route exact path="/register" element={<Register></Register>}></Route>
        <Route
          exact
          path="/detalle-menu/:id"
          element={<DetalleMenu></DetalleMenu>}
        ></Route>
        <Route
          exact
          path="/acerca-de-nosotros"
          element={<AcercaDeNosotros></AcercaDeNosotros>}
        ></Route>
        <Route exact path="/pedidos" element={<Pedidos></Pedidos>}></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
