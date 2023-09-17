import React from "react";
import { Table } from "react-bootstrap";
import ItemMenu from "./ItemMenu";

const ListaMenu = () => {
  return (
    <Table striped hover variant="secondary" className="shadow">
      <thead>
        <tr>
          <th className="fs-5 fw-light text-center">Imagen</th>
          <th className="fs-5 fw-light text-center">Nombre</th>
          <th className="fs-5 fw-light text-center">Precio</th>
          <th className="fs-5 fw-light text-center">Categoria</th>
          <th className="fs-5 fw-light text-center">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <ItemMenu></ItemMenu>
        <ItemMenu></ItemMenu>
        <ItemMenu></ItemMenu>
        <ItemMenu></ItemMenu>
        <ItemMenu></ItemMenu>
      </tbody>
    </Table>
  );
};

export default ListaMenu;
