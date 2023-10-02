import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./component/common/Menu.jsx";
import Login from "./component/views/Login.jsx";
import Register from "./component/views/Register.jsx";
import AcercaDeNosotros from "./component/views/AcercaDeNosotros.jsx";
import Pedidos from "./component/views/Pedidos.jsx";
import Error404 from "./component/views/Error404.jsx";
import Footer from "./component/common/Footer.jsx";
import Inicio from "./component/views/Inicio.jsx";
import DetalleMenu from "./component/views/DetalleMenu.jsx";
import EncapsularRutas from "./component/routes/EncapsularRutas.jsx";
import { useState } from "react";
import RutasProtegidas from "./component/routes/RutasProtegidas.jsx";

function App() {
  const usuarioEnLinea =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || null;

  const [usuarioActivo, setUsuarioActivo] = useState(usuarioEnLinea);
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        {usuarioActivo?.perfil ? (
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
