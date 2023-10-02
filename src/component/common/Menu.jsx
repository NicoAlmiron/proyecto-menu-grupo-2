import { Container, Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "../../css/navbarYFooter.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  const usuarioEnLinea =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || null;

  const navegar = useNavigate();

  const logout = () => {
    Swal.fire({
      title: "¿Está seguro?",
      text: "¿Desea cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("usuarioLogueado");
        navegar("/");
      }
    });
  };

  return (
    <Navbar expand="lg" className="menu">
      <Container>
        <Navbar.Brand href="/">
          <span className="brand titulo-navbar">La Campiña</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-list">
            <Link to={"/"} className="nav-link btn-nav">
              Inicio
            </Link>
            <Link to={"/acerca-de-nosotros"} className="nav-link btn-nav">
              Sobre nosotros
            </Link>
            {usuarioEnLinea ? (
              usuarioEnLinea.perfil ? (
                <>
                  <Link to={"/pedidos"} className="nav-link btn-nav">
                    Pedido
                  </Link>
                  <Link to={"/administrador/"} className="nav-link btn-nav">
                    Administrador
                  </Link>
                  <button className="btn-logout" onClick={logout}>
                    Salir
                  </button>
                </>
              ) : (
                <>
                  <Link to={"/pedidos"} className="nav-link btn-nav">
                    Pedido
                  </Link>
                  <button className="btn-logout" onClick={logout}>
                    Salir
                  </button>
                  <span className="text-center mx-2 text-warning fs-4">
                    <FontAwesomeIcon icon={faUser} className="mx-2" />
                    {usuarioEnLinea.nombre}
                  </span>
                </>
              )
            ) : (
              <Link to={"/login"} className="nav-link btn-nav">
                Ingresar
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
