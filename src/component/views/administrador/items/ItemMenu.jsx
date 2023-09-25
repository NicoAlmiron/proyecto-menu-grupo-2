import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarMenu, listarMenus } from "../../../helpers/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ItemMenu = ({
  nombreMenu,
  precio,
  imagen,
  categoria,
  id,
  setListaMenus,
}) => {
  const detalleMenu = useNavigate();
  const borrarMenuSelect = () => {
    Swal.fire({
      title: `Estas seguro de eliminar ${nombreMenu}?`,
      text: "Esta accion no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    })
      .then((result) => {
        if (result.isConfirmed) {
          borrarMenu(id)
            .then((resp) => {
              if (resp.status === 200) {
                listarMenus()
                  .then((resp) => {
                    setListaMenus(resp);
                  })
                  .catch((error) => {
                    console.log(error);
                    Swal.fire(
                      "A surgido un error",
                      `Cod de error: ${error.message}`,
                      "error"
                    );
                  });

                Swal.fire(
                  "Menu Eliminado",
                  `El menu se a eliminado con exito`,
                  "success"
                );
              }
            })
            .catch((error) => {
              console.log(error);
              Swal.fire(
                "A surgido un error",
                `Cod de error: ${error.message}`,
                "error"
              );
            });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "A surgido un error",
          `Cod de error: ${error.message}`,
          "error"
        );
      });
  };

  return (
    <tr>
      <td className="text-center">
        <Image
          src={
            imagen
              ? imagen
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUh66Phs0ZKCT_FNuieeq0F8dWEEvd7xxyRg&usqp=CAU"
          }
          alt={nombreMenu}
          rounded
          className="img-item"
          onClick={() => detalleMenu(`/detalle-menu/${id}`)}
        ></Image>
      </td>
      <td>
        <p className="fw-light text-center">{nombreMenu}</p>
      </td>
      <td>
        <p className="fw-light text-center">${precio}</p>
      </td>
      <td>
        <p className="fw-light text-center">{categoria}</p>
      </td>
      <td>
        <div className="d-flex flex-column">
          <Link
            to={`/administrador/editar-menu/${id}`}
            className="btn btn-warning"
          >
            <FontAwesomeIcon icon={faPenToSquare} /> Editar
          </Link>
          <Button
            variant="danger"
            className="mt-md-3"
            onClick={borrarMenuSelect}
          >
            <FontAwesomeIcon icon={faTrashCan} /> Borrar
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemMenu;
