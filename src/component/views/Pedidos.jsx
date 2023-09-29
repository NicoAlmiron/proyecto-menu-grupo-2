import React, { useEffect, useState } from "react";
import "../../css/pedidos.css";
import { listarMenus } from "../helpers/queries";
import CardPedidos from "../pedidos/CardPedidos";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
// import { Row } from "react-bootstrap";
// import Swal from "sweetalert2";

export const Pedidos = () => {
  const arrayPedidos = [1, 2, 3];
  const [listaMenus, setListaMenus] = useState([]);
  const [listaPedidos, setListaPedidos] = useState([]);

  useEffect(() => {
    listarMenus()
      .then((resp) => {
        if (resp) {
          setListaMenus(resp);
          // setListaPedidos(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filtrarLista = () => {
    const arrayfiltrado = listaMenus.filter((menu) => {
      return arrayPedidos.includes(menu.id);
    });
    return arrayfiltrado;
  };
  useEffect(() => {
    setListaPedidos(filtrarLista());
  }, [listaMenus]);
  return (
    <div className="bg">
      <Container className="d-flex flex-column">
        <div className=" d-flex flex-column flex-md-row justify-content-md-around">
          {listaPedidos.map((menu) => (
            <CardPedidos key={menu.id} menu={menu}></CardPedidos>
          ))}
        </div>
      </Container>
      <div className="mt-auto">
        <Card>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Pedidos;
