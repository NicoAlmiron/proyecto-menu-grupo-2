import React from "react";
import { Button } from "react-bootstrap";

const ItemPedido = () => {
  return (
    <tr>
      <td>
        <p className="fw-light text-center">Menu</p>
      </td>
      <td>
        <p className="fw-light text-center">Nombre Cliente</p>
      </td>
      <td>
        <p className="fw-light text-center">16:45hs - 19/09/2023</p>
      </td>
      <td>
        <p className="fw-light text-center">Pendiente</p>
      </td>
      <td>
        <div className="d-flex flex-column">
          <Button variant="warning">Editar</Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemPedido;
