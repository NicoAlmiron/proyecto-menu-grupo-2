import React, { useEffect, useState } from "react";
import ItemUsuario from "../items/ItemUsuario";
import ItemPlaceholder from "../items/ItemPlaceholder";
import { Table } from "react-bootstrap";
import { listarUsuarios } from "../../../helpers/queries";

const ListaUsuario = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  useEffect(() => {
    listarUsuarios()
      .then((resp) => {
        setListaUsuarios(resp);
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
            <th className="fs-5 fw-light text-center">Perfil</th>
            <th className="fs-5 fw-light text-center">Nombre</th>
            <th className="fs-5 fw-light text-center">Email</th>
            <th className="fs-5 fw-light text-center">Estado</th>
            <th className="fs-5 fw-light text-center">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {listaUsuarios ? (
            listaUsuarios?.map((user) => (
              <ItemUsuario key={user.id} {...user}></ItemUsuario>
            ))
          ) : (
            <ItemPlaceholder></ItemPlaceholder>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default ListaUsuario;
