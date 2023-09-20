import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { realizarPedido, deshacerPedido } from "../../../helpers/queries";
import Swal from "sweetalert2";

const ItemPedido = ({ pedido }) => {
  const [estadoPedido, setEstadoPedido] = useState(pedido.estado);

  const pedidoRealizado = () => {
    if (!pedido.estado) {
      pedido.estado = true;
      realizarPedido(pedido.id, pedido)
        .then((resp) => {
          if (resp.status === 200) {
            Swal.fire(
              "Se realizo con exito",
              `El pedido: ${pedido.menu}!`,
              "success"
            );
            setEstadoPedido(pedido.estado);
          }
        })
        .catch((error) => {
          console.log(error);
          Swal.fire("Hubo un error", `Codigo de error: ${error}`, "error");
        });
    }
  };

  const pedidoDeshecho = () => {
    if (pedido.estado) {
      pedido.estado = false;
      deshacerPedido(pedido.id, pedido)
        .then((resp) => {
          if (resp.status === 200) {
            Swal.fire(
              `El pedido ${pedido.menu}`,
              "Se a deshecho con exito!",
              "success"
            );
            setEstadoPedido(pedido.estado);
          }
        })
        .catch((error) => {
          console.log(error);
          Swal.fire(
            "A ocurrido un error",
            `Codigo de error: ${error}`,
            "error"
          );
        });
    }
  };

  return (
    <tr>
      <td>
        <p className="fw-light text-center">{pedido.menu}</p>
      </td>
      <td>
        <p className="fw-light text-center">{pedido.usuario}</p>
      </td>
      <td>
        <p className="fw-light text-center">{pedido.fecha}</p>
      </td>
      <td>
        {pedido.estado ? (
          <p className="fw-light text-center text-success">Realizado</p>
        ) : (
          <p className="fw-light text-center text-danger">Pendiente</p>
        )}
        <p className="fw-light text-center"></p>
      </td>
      <td>
        {estadoPedido ? (
          <div className="text-center">
            <Button variant="warning" onClick={pedidoDeshecho}>
              Deshacer
            </Button>
            <Button variant="danger" className="ms-2">
              Borrar
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <Button variant="success" onClick={pedidoRealizado}>
              Realizar
            </Button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default ItemPedido;
