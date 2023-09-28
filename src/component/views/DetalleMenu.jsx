import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../../css/DetalleMenu.css";
import { obtenerMenu } from "../helpers/queries";
import { useNavigate, useParams } from "react-router-dom";

function DetalleMenu() {
  const irAPedido = useNavigate();
  const { id } = useParams();
  const arrayPedido = JSON.parse(localStorage.getItem("pedidos")) || [];
  const [listaPedidos, setListaPedidos] = useState(arrayPedido);
  const usuarioEnLinea =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || null;
  const [usuario, setUsuario] = useState(usuarioEnLinea);
  const [menu, setMenu] = useState({});
  useEffect(() => {
    obtenerMenu(id)
      .then((resp) => {
        if (resp) {
          setMenu(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const agregarAPedido = () => {
    setListaPedidos([...arrayPedido, parseInt(id)]);
  };
  useEffect(() => {
    localStorage.setItem("pedidos", JSON.stringify(listaPedidos));
  }, [listaPedidos]);
  console.log(listaPedidos);

  return (
    <>
      <Container>
        <Card>
          <Card.Img variant="top" src={menu.imagen} />
          <Card.ImgOverlay>
            <Card.Title>{menu.nombreMenu}</Card.Title>
          </Card.ImgOverlay>
          <Card.Body>
            <Card.Text>{menu.detalle}</Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        <div>
          {menu.precio}{" "}
          <Button variant="success" onClick={() => agregarAPedido()}>
            Agregar al pedido
          </Button>{" "}
          <Button variant="info" onClick={() => irAPedido("/pedidos")}>
            ir al pedido
          </Button>{" "}
        </div>
      </Container>
    </>
  );
}
export default DetalleMenu;
