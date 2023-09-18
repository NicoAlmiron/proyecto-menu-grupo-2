import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemMenu = ({ nombreMenu, precio, imagen, categoria, id }) => {
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
          <Link to={`/editar-menu/${id}`} className="btn btn-warning">
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
