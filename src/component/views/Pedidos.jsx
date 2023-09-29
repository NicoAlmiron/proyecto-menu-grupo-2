import React, { useEffect, useState } from "react";
import "../../css/pedidos.css";
import { listarMenus } from "../helpers/queries";
import CardPedidos from "../pedidos/CardPedidos";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { get } from "react-hook-form";
// import { Row } from "react-bootstrap";
// import Swal from "sweetalert2";

export const Pedidos = () => {
  const arrayPedidos = [1, 2, 3];
  const [listaMenus, setListaMenus] = useState([]);
  const [listaPedidos, setListaPedidos] = useState([]);
  const usuarioLogueado =
    JSON.parse(localStorage.getItem("usuarioLogueado")) || {};
  const [usuario, setUsuario] = useState(usuarioLogueado);
  const [fechapedido, setFechapedido] = useState(null);
  const fechayHora = () => {
    const ahora = new Date();
    const dia = ahora.getDate();
    const mes = ahora.getMonth() + 1;
    const año = ahora.getFullYear();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const fechaHoraActual =
      dia + "/" + mes + "/" + año + " " + horas + ":" + minutos;
    return fechaHoraActual;
  };

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
  const agregarPedidos = () => {
    const fechaActual = fechayHora();
    const pedido = {
      usuario: usuario.nombre,
      fecha: fechaActual,
      menu: listaPedidos,
      estado: false,
    };
    console.log(pedido);
  };
  return (
    <div className="bg">
      <div className="containerDetalleMenu">
        <Container className="m-3">
          <div className=" d-flex flex-column flex-md-row justify-content-md-around">
            {listaPedidos.map((menu) => (
              <CardPedidos key={menu.id} menu={menu}></CardPedidos>
            ))}
          </div>
        </Container>
        <Card>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                agregarPedidos();
              }}
            >
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Pedidos;
