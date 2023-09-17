import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemMenu = () => {
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
        <p className="fw-light text-center">Titulo del Menu</p>
      </td>
      <td>
        <p className="fw-light text-center">$9999</p>
      </td>
      <td>
        <p className="fw-light text-center">Categoria del menu</p>
      </td>
      <td>
        <div className="d-flex flex-column">
          <Link to={`/editar-menu`} className="btn btn-warning">
            Editar
          </Link>
          <Button variant="danger" className="mt-md-3">
            Borrar
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemMenu;
