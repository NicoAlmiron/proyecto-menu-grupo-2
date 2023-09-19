import React from "react";
import { Button, Image } from "react-bootstrap";

const ItemUsuario = ({ perfil, nombre, email, estado }) => {
  return (
    <tr>
      <td>
        <Image
          src={
            perfil
              ? perfil
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUh66Phs0ZKCT_FNuieeq0F8dWEEvd7xxyRg&usqp=CAU"
          }
          alt={nombre}
          rounded
          className="img-item"
        ></Image>
      </td>
      <td>
        <p className="fw-light text-center">{nombre}</p>
      </td>
      <td>
        <p className="fw-light text-center">{email}</p>
      </td>
      <td>
        <p className="fw-light text-center">
          {estado ? "Activo" : "Suspendido"}
        </p>
      </td>
      <td>
        <div className="d-flex flex-column">
          <Button variant="danger">Suspender</Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemUsuario;
