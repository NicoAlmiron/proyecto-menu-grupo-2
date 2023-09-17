import React, { useState } from "react";
import "../../css/administrador.css";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import ListaMenu from "./administrador/listas/ListaMenu";
import ListaUsuario from "./administrador/listas/ListaUsuario.jsx";
import ListaPedido from "./administrador/listas/ListaPedido.jsx";
import { Link } from "react-router-dom";

const Administrador = () => {
  const [key, setKey] = useState("menu");

  return (
    <Container>
      <article className="bg-Admin rounded p-3 my-4 shadow">
        <Row>
          <Col sm={8} className="text-center">
            <div>
              <h3 className="display-3">Administrador</h3>
              <h5 className="fs-3 fw-light">admin@rolling.com</h5>
            </div>
            <div className="text-center">
              <Link to={"/crear-menu"} className="btn btn-primary ">
                + Crear Menu
              </Link>
            </div>
          </Col>
          <Col sm={4} className="text-center">
            <div className="list-group list-group-flush rounded bg-list">
              <li
                onClick={() => setKey("menu")}
                className="list-group-item fs-4 fw-light list-group-item-light list-group-item-action"
              >
                Menu`s: 0
              </li>
              <li
                onClick={() => setKey("usuario")}
                className="list-group-item fs-4 fw-light list-group-item-light list-group-item-action"
              >
                Usuarios: 0
              </li>
              <li
                onClick={() => setKey("pedido")}
                className="list-group-item fs-4 fw-light list-group-item-light list-group-item-action"
              >
                Pedidos: 0
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
          className="mb-3"
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
  );
};

export default Administrador;
