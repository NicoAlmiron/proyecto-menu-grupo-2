import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ItemMenu from "../items/ItemMenu";
import { listarMenus } from "../../../helpers/queries";
import Swal from "sweetalert2";
import ItemPlaceholder from "../items/ItemPlaceholder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import Paginacion from "../Paginacion";

const ListaMenu = () => {
  const [mostrarSpinner, setMostrarSpinner] = useState(true);
  const [listaMenus, setListaMenus] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(5);

  let maximo = Math.ceil(listaMenus?.length / porPagina) || 0;

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
      <Table
        striped
        hover
        variant="warning"
        className="shadow w-100"
        responsive
      >
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
            listaMenus
              .slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
              )
              .map((menu) => (
                <ItemMenu
                  key={menu.id}
                  {...menu}
                  setListaMenus={setListaMenus}
                ></ItemMenu>
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

export default ListaMenu;
