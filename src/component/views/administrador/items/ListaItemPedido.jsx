import React from "react";

const ListaItemPedido = ({ nombreMenu }) => {
  return (
    <li>
      <p className="fw-light text-center">{nombreMenu}</p>
    </li>
  );
};

export default ListaItemPedido;
