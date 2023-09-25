import React, { useEffect, useState, Button } from "react";
import "../../css/pedidos.css";
import { listarMenus } from "../helpers/queries";
import CardPedidos from "../pedidos/CardPedidos";
// import { Row } from "react-bootstrap";
// import Swal from "sweetalert2";

export const Pedidos = () => {
  const arrayPedidos = [1, 2];
  const [listaMenus, setListaMenus] = useState([]);
  const [listaPedidos, setListaPedidos] = useState([]);

  useEffect(() => {
    listarMenus()
      .then((resp) => {
        if (resp) {
          setListaMenus(resp);
          // setListaPedidos(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filtrarLista = () => {
    const arrayfiltrado = listaMenus.filter((menu) => {
      return arrayPedidos.includes(menu.id);
    });
    return arrayfiltrado;
  };
  useEffect(() => {
    setListaPedidos(filtrarLista());
  }, []);
  return (
    <div className="bg containerDetalleMenu">
      {listaPedidos.map((menu) => (
        <CardPedidos key={menu.id} menu={menu}></CardPedidos>
      ))}
    </div>
  );
};

export default Pedidos;
