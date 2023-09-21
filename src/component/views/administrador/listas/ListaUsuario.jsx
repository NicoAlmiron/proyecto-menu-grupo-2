import React, { useEffect, useState } from "react";
import ItemUsuario from "../items/ItemUsuario";
import ItemPlaceholder from "../items/ItemPlaceholder";
import { Table } from "react-bootstrap";
import { listarUsuarios } from "../../../helpers/queries";
import Paginacion from "../Paginacion";

const ListaUsuario = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [mostrarSpinner, setMostrarSpinner] = useState(true);
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(5);

  let maximo = Math.ceil(listaUsuarios?.length / porPagina) || 0;

  useEffect(() => {
    listarUsuarios()
      .then((resp) => {
        if (resp) {
          setListaUsuarios(resp);
          setMostrarSpinner(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const ordenarNombreAlfabeticamente = () => {
    const arrayOrdenado = [...listaUsuarios].sort((a, b) => {
      const nombreA = a.nombre.toLowerCase();
      const nombreB = b.nombre.toLowerCase();
      return nombreA.localeCompare(nombreB);
    });
    setListaUsuarios(arrayOrdenado);
  };
  const ordenarEmailAlfabeticamente = () => {
    const arrayOrdenado = [...listaUsuarios].sort((a, b) => {
      const nombreA = a.email.toLowerCase();
      const nombreB = b.email.toLowerCase();
      return nombreA.localeCompare(nombreB);
    });
    setListaUsuarios(arrayOrdenado);
  };

  return (
    <>
      <Table striped hover variant="warning" className="shadow" responsive>
        <thead>
          <tr>
            <th className="fs-5 fw-light text-center">Perfil</th>
            <th
              className="fs-5 fw-light text-center btn-lista-usuario"
              onClick={ordenarNombreAlfabeticamente}
            >
              Nombre
            </th>
            <th
              className="fs-5 fw-light text-center btn-lista-usuario"
              onClick={ordenarEmailAlfabeticamente}
            >
              Email
            </th>
            <th className="fs-5 fw-light text-center">Estado</th>
            <th className="fs-5 fw-light text-center">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {mostrarSpinner ? (
            <ItemPlaceholder></ItemPlaceholder>
          ) : (
            listaUsuarios
              ?.slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
              )
              .map((user) => (
                <ItemUsuario key={user.id} user={user}></ItemUsuario>
              ))
          )}
        </tbody>
      </Table>
      <Paginacion
        pagina={pagina}
        setPagina={setPagina}
        maximo={maximo}
      ></Paginacion>
    </>
  );
};

export default ListaUsuario;
