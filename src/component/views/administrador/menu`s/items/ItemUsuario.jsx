import React from "react";
import { Button, Image } from "react-bootstrap";

const ItemUsuario = () => {
  return (
    <tr>
      <td>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUh66Phs0ZKCT_FNuieeq0F8dWEEvd7xxyRg&usqp=CAU"
          alt="titulo del menu"
          rounded
          className="img-item"
        ></Image>
      </td>
      <td>
        <p className="fw-light text-center">Nombre Usuario</p>
      </td>
      <td>
        <p className="fw-light text-center">user@gmail.com</p>
      </td>
      <td>
        <p className="fw-light text-center">Activo</p>
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
