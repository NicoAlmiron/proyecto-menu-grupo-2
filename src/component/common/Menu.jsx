import { Container, Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import logo from "../../../public/navbar/logo.png";
import "../../css/navbarYFooter.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
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
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("usuarioLogueado");
        navegar("/");
      }
    });
  };

  return (
    <Navbar expand='lg' className='menu'>
      <Container>
        <Navbar.Brand href='/'>
          <span className="brand">La Campiña</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto nav-list'>
            <Link to={"/"} className='nav-link'>
              Inicio
            </Link>
            <Link to={"/acerca-de-nosotros"} className='nav-link'>
              Sobre nosotros
            </Link>
            {usuarioEnLinea ? (
              usuarioEnLinea.perfil ? (
                <>
                  <Link to={"/pedidos"} className='nav-link'>
                    Pedido
                  </Link>
                  <Link to={"/administrador/"} className='nav-link'>
                    Administrador
                  </Link>
                  <button className='btn-logout' onClick={logout}>
                    Salir
                  </button>
                </>
              ) : (
                <>
                  <Link to={"/pedidos"} className='nav-link'>
                    Pedido
                  </Link>
                  <button className='btn-logout' onClick={logout}>
                    Salir
                  </button>
                  <span className='ms-2'>{usuarioEnLinea.nombre}</span>
                </>
              )
            ) : (
              <Link to={"/login"} className='nav-link'>
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
