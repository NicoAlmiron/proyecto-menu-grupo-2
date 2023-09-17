import React from "react";
import ItemUsuario from "./ItemUsuario";
import { Table } from "react-bootstrap";

const ListaUsuario = () => {
  return (
    <Table striped hover variant="secondary" className="shadow">
      <thead>
        <tr>
          <th className="fs-5 fw-light text-center">Perfil</th>
          <th className="fs-5 fw-light text-center">Nombre</th>
          <th className="fs-5 fw-light text-center">Email</th>
          <th className="fs-5 fw-light text-center">Estado</th>
          <th className="fs-5 fw-light text-center">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <ItemUsuario></ItemUsuario>
        <ItemUsuario></ItemUsuario>
        <ItemUsuario></ItemUsuario>
        <ItemUsuario></ItemUsuario>
      </tbody>
    </Table>
  );
};

export default ListaUsuario;
