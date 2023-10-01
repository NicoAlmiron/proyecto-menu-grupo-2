import { faUserCheck, faUserXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { activarUsuarios, suspenderUsuarios } from "../../../helpers/queries";
import Swal from "sweetalert2";

const ItemUsuario = ({ user }) => {
  const [estadoUser, setEstadoUser] = useState(user?.estado);

  useEffect(() => {}, [estadoUser]);

  const suspenderUsuario = () => {
    if (user.estado) {
      user.estado = false;
      Swal.fire({
        title: `Estas seguro de suspender la cuenta ${user.nombre}?`,
        text: "Puedes volver a activarla desde el menu de usuarios",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Suspender",
        cancelButtonText: "Cancelar",
      })
        .then((result) => {
          if (result.isConfirmed) {
            suspenderUsuarios(user.id, user)
              .then((resp) => {
                if (resp.status === 200) {
                  Swal.fire(
                    `Se Suspendio la cuenta ${user.nombre}`,
                    `Puedes volver a activarla desde el menu de usuarios`,
                    "success"
                  );
                  setEstadoUser(user.estado);
                }
              })
              .catch((error) => {
                console.log(error);
                Swal.fire(
                  "A surgido un error",
                  `Cod de error: ${error}`,
                  "error"
                );
              });
          }
        })
        .catch((error) => {
          console.log(error);
          Swal.fire("A surgido un error", `Cod de error: ${error}`, "error");
        });
    }
  };

  const activarUsuario = () => {
    if (!user.estado) {
      user.estado = true;
      Swal.fire({
        title: `Estas seguro de Activar la cuenta ${user.nombre}?`,
        text: "Puedes volver a suspenderla desde el menu de usuarios",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Activar",
        cancelButtonText: "Cancelar",
      })
        .then((result) => {
          if (result.isConfirmed) {
            activarUsuarios(user.id, user)
              .then((resp) => {
                if (resp.status === 200) {
                  Swal.fire(
                    `Se Activado la cuenta ${user.nombre}`,
                    `Puedes volver a suspenderla desde el menu de usuarios`,
                    "success"
                  );
                  setEstadoUser(user.estado);
                }
              })
              .catch((error) => {
                console.log(error);
                Swal.fire(
                  "A surgido un error",
                  `Cod de error: ${error}`,
                  "error"
                );
              });
          }
        })
        .catch((error) => {
          console.log(error);
          Swal.fire("A surgido un error", `Cod de error: ${error}`, "error");
        });
    }
  };

  return (
    <tr>
      <td>
        <p className="fw-light text-center">
          {user.perfil ? "Administrador" : "Usuario"}
        </p>
      </td>
      <td>
        <p className="fw-light text-center">{user.nombre}</p>
      </td>
      <td>
        <p className="fw-light text-center">{user.email}</p>
      </td>
      <td>
        <p className="fw-light text-center">
          {user.estado ? "Activo" : "Suspendido"}
        </p>
      </td>
      <td>
        <div className="d-flex flex-column">
          {user.estado ? (
            <Button variant="danger" onClick={suspenderUsuario}>
              Suspender <FontAwesomeIcon icon={faUserXmark} className="ms-1" />
            </Button>
          ) : (
            <Button variant="success" onClick={activarUsuario}>
              Activar
              <FontAwesomeIcon icon={faUserCheck} className="ms-1" />
            </Button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default ItemUsuario;
