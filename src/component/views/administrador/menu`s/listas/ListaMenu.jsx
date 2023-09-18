import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ItemMenu from "../items/ItemMenu";
import { listarMenus } from "../../../../helpers/queries";
import Swal from "sweetalert2";
import ItemPlaceholder from "../items/ItemPlaceholder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";

const ListaMenu = () => {
  const [mostrarSpinner, setMostrarSpinner] = useState(true);
  const [listaMenus, setListaMenus] = useState([]);

  useEffect(() => {
    listarMenus()
      .then((resp) => {
        if (resp) {
          setListaMenus(resp);
          setMostrarSpinner(false);
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("A ocurrido un error", "cod de error " + error, "error");
      });
  }, []);

  const ordenarNombreAlfabeticamente = () => {
    const arrayOrdenado = [...listaMenus].sort((a, b) => {
      const nombreA = a.nombreMenu.toLowerCase();
      const nombreB = b.nombreMenu.toLowerCase();
      return nombreA.localeCompare(nombreB);
    });
    setListaMenus(arrayOrdenado);
  };
  const ordenarCategoriaAlfabeticamente = () => {
    const arrayOrdenado = [...listaMenus].sort((a, b) => {
      const categoriaA = a.categoria.toLowerCase();
      const categoriaB = b.categoria.toLowerCase();
      return categoriaA.localeCompare(categoriaB);
    });
    setListaMenus(arrayOrdenado);
  };
  const ordenarPrecioMenosAMas = () => {
    const arrayOrdenado = [...listaMenus].sort((a, b) => {
      return a.precio - b.precio;
    });
    setListaMenus(arrayOrdenado);
  };
  return (
    <>
      <Table striped hover variant="secondary" className="shadow">
        <thead>
          <tr>
            <th className="fs-5 fw-light text-center">
              Imagen
              <FontAwesomeIcon icon={faImage} className="ms-2" />
            </th>
            <th
              className="fs-5 fw-light text-center btn-filtrado-lista-menu"
              onClick={ordenarNombreAlfabeticamente}
            >
              Nombre
            </th>
            <th
              className="fs-5 fw-light text-center btn-filtrado-lista-menu"
              onClick={ordenarPrecioMenosAMas}
            >
              Precio
            </th>
            <th
              className="fs-5 fw-light text-center btn-filtrado-lista-menu"
              onClick={ordenarCategoriaAlfabeticamente}
            >
              Categoria
            </th>
            <th className="fs-5 fw-light text-center">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {mostrarSpinner ? (
            <ItemPlaceholder></ItemPlaceholder>
          ) : (
            listaMenus.map((menu) => (
              <ItemMenu
                key={menu.id}
                {...menu}
                setListaMenus={setListaMenus}
              ></ItemMenu>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
};

export default ListaMenu;
