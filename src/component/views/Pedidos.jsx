import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../css/pedidos.css";
import { listarPedidos } from "../helpers/queries";

export const Pedidos = () => {
  const [listapedidos, setListaPedidos] = useState([]);
  useEffect(() => {
    listarPedidos().then((respuestaPedidos) => {
      if (respuestaPedidos) {
        setListaPedidos(respuestaPedidos);
      } else {
        Swal.fire("Good job!", "You clicked the button!", "success");
      }
    });
  }, []);

  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="fondo cafe"
      />
      <Container>
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
        <Row>
          <CardPedidos></CardPedidos>
        </Row>
      </Container>
    </section>
  );
};

export default Pedidos;
