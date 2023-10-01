import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../../css/DetalleMenu.css";
import { obtenerMenu } from "../helpers/queries";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
        <Card className="bg-dark text-white my-3">
          <Card.Img
            variant="top"
            alt="Imagen del menu"
            className="card-img-detalle"
            src={menu.imagen}
          />
          <Card.ImgOverlay>
            <Card.Title>
              <h2 className="estilo-letras">{menu.nombreMenu}</h2>
            </Card.Title>
          </Card.ImgOverlay>
          <Card.Body>
            <Card.Text className="estilo-textos">
              Descripción del menú: {menu.detalle}
            </Card.Text>
          </Card.Body>
        </Card>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-white bg-dark rounded my-3 p-2 ">
          Precio : $ {menu.precio}{" "}
          <div className="text-end d-flex flex-column flex-md-row">
            <Button variant="success" onClick={() => agregarAPedido()}>
              <FontAwesomeIcon icon={faPlus} /> Agregar al pedido
            </Button>{" "}
            <Button variant="info" onClick={() => irAPedido("/pedidos")}>
              <FontAwesomeIcon icon={faArrowRight} /> ir al pedido
            </Button>{" "}
          </div>
        </div>
      </Container>
    </>
  );
}
export default DetalleMenu;
