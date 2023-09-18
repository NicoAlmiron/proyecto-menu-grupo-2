import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ItemMenu from "../items/ItemMenu";
import { listarMenus } from "../../../helpers/queries";
import Swal from "sweetalert2";

const ListaMenu = () => {
  const [mostrarSpinner, setMostrarSpinner] = useState(true);
  const [listaMenus, setListaMenus] = useState([]);

  useEffect(() => {
    listarMenus()
      .then((resp) => {
        if (resp) {
          setListaMenus(resp);
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("A ocurrido un error", "cod de error " + error, "error");
      });
  }, []);

  return (
    <>
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
          {listaMenus.map((menu) => (
            <ItemMenu
              key={menu.id}
              {...menu}
              setListaMenus={setListaMenus}
            ></ItemMenu>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ListaMenu;
