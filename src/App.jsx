import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./component/common/Menu";
import Login from "./component/views/Login";
import Register from "./component/views/Register";
import DetalleMenu from "./component/views/DetalleMenu";
import Administrador from "./component/views/Administrador";
import AcercaDeNosotros from "./component/views/AcercaDeNosotros";
import Pedidos from "./component/views/Pedidos";
import Error404 from "./component/views/Error404";
import Footer from "./component/common/Footer";
import Inicio from "./component/views/Inicio";

function App() {
  const usuarioEnlinea =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || null;
  const [usuarioActivo, setUsuarioActivo] = useState(usuarioEnlinea);

  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/register" element={<Register></Register>}></Route>
        <Route
          exact
          path="/detalle-menu"
          element={<DetalleMenu></DetalleMenu>}
        ></Route>
        <Route
          exact
          path="/administrador"
          element={<Administrador></Administrador>}
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
