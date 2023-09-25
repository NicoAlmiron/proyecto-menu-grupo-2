import React, { useEffect, useState } from "react";
import "../../css/administrador.css";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import ListaMenu from "./administrador/listas/ListaMenu";
import ListaPedido from "./administrador/listas/ListaPedido";
import ListaUsuario from "./administrador/listas/ListaUsuario";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMitten,
  faUser,
  faUsers,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { listarMenus, listarPedidos, listarUsuarios } from "../helpers/queries";

const Administrador = () => {
  const [key, setKey] = useState("menu");
  const [listaMenus, setListaMenus] = useState([]);
  const [listaUsuario, setListaUsuario] = useState([]);
  const [listaPedidos, setListaPedidos] = useState([]);
  const [contador, setContador] = useState({});

  useEffect(() => {
    document.title = "Administracion";

    listarMenus().then((resp) => {
      if (resp) {
        setListaMenus(resp);
      }
    });
    listarUsuarios().then((resp) => {
      if (resp) {
        setListaUsuario(resp);
      }
    });
    listarPedidos().then((resp) => {
      if (resp) {
        setListaPedidos(resp);
      }
    });
  }, []);

  useEffect(() => {
    const cont = {
      menus: listaMenus.length,
      usuarios: listaUsuario.length,
      pedidos: listaPedidos.length,
    };

    setContador(cont);
  }, [listaMenus, listaUsuario, listaPedidos]);

  return (
    <div className="bg-pagina-administrador">
      <Container>
        <article className="bg-Admin rounded p-3 my-4 shadow text-dark">
          <Row>
            <Col sm={8} className="text-center">
              <div>
                <h3 className="display-3">
                  <FontAwesomeIcon icon={faUser} className="me-2" />
                  Administrador
                </h3>
                <h5 className="fs-3 fw-light">admin@rolling.com</h5>
              </div>
              <div className="d-flex justify-content-md-around flex-column flex-md-row my-3">
                <Link
                  to={"/administrador/crear-menu"}
                  className="btn btn-primary my-2 my-md-0 btn-crear text-dark border border-secondary"
                >
                  + Crear Menu
                  <FontAwesomeIcon icon={faMitten} className="ms-2" />
                </Link>
                <Link
                  to={"/administrador/crear-usuario"}
                  className="btn btn-primary my-2 my-md-0 btn-crear text-dark border border-secondary"
                >
                  + Crear Usuario
                  <FontAwesomeIcon icon={faUser} className="ms-2" />
                </Link>
              </div>
            </Col>
            <Col sm={4} className="text-center">
              <div className="list-group list-group-flush rounded bg-list border border-secondary">
                <li
                  onClick={() => setKey("menu")}
                  className="list-group-item fs-4 fw-light list-group-item-light list-group-item-action bg-boton-listas"
                >
                  <FontAwesomeIcon icon={faUtensils} /> Menu`s:
                  {contador ? ` ${contador?.menus}` : " 0"}
                </li>
                <li
                  onClick={() => setKey("usuario")}
                  className="list-group-item fs-4 fw-light list-group-item-light list-group-item-action bg-boton-listas"
                >
                  <FontAwesomeIcon icon={faUsers} /> Usuarios:
                  {contador ? ` ${contador?.usuarios}` : " 0"}
                </li>
                <li
                  onClick={() => setKey("pedido")}
                  className="list-group-item fs-4 fw-light list-group-item-light list-group-item-action bg-boton-listas"
                >
                  <FontAwesomeIcon icon={faMitten} /> Pedidos:
                  {contador ? ` ${contador?.pedidos}` : " 0"}
                </li>
              </div>
            </Col>
          </Row>
        </article>
        <article>
          <Tabs
            id="tabla-administrador"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 seleccion-listas-administrador rounded-top"
            fill
            variant="underline"
          >
            <Tab eventKey="menu" title="Menu`s">
              <ListaMenu></ListaMenu>
            </Tab>
            <Tab eventKey="usuario" title="Usuarios">
              <ListaUsuario></ListaUsuario>
            </Tab>
            <Tab eventKey="pedido" title="Pedidos">
              <ListaPedido></ListaPedido>
            </Tab>
          </Tabs>
        </article>
      </Container>
    </div>
  );
};

export default Administrador;
