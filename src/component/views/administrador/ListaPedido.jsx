import React from "react";
import { Table } from "react-bootstrap";
import ItemPedido from "./ItemPedido";

const ListaPedido = () => {
  return (
    <Table striped hover variant="secondary" className="shadow">
      <thead>
        <tr>
          <th className="fs-5 fw-light text-center">Pedido</th>
          <th className="fs-5 fw-light text-center">Cliente</th>
          <th className="fs-5 fw-light text-center">Fecha</th>
          <th className="fs-5 fw-light text-center">Estado</th>
          <th className="fs-5 fw-light text-center">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <ItemPedido></ItemPedido>
        <ItemPedido></ItemPedido>
        <ItemPedido></ItemPedido>
        <ItemPedido></ItemPedido>
      </tbody>
    </Table>
  );
};

export default ListaPedido;
