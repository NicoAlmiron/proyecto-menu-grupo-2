import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ItemPedido from "../items/ItemPedido";
import ItemPlaceholder from "../items/ItemPlaceholder";
import { listarPedidos, realizarPedido } from "../../../helpers/queries";
import Swal from "sweetalert2";

const ListaPedido = () => {
  const [listaPedidos, setListaPedidos] = useState([]);
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    listarPedidos()
      .then((resp) => {
        if (resp) {
          setMostrarSpinner(false);
          setListaPedidos(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
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
          {!mostrarSpinner ? (
            listaPedidos.map((pedido) => (
              <ItemPedido key={pedido.id} pedido={pedido}></ItemPedido>
            ))
          ) : (
            <ItemPlaceholder></ItemPlaceholder>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default ListaPedido;
