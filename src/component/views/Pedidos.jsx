import React, { useEffect, useState } from "react";
import "../../css/pedidos.css";
import { crearPedido, listarMenus } from "../helpers/queries.js";
import { Container, Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import CardPedidos from "./pedidos/CardPedidos.jsx";
import { useNavigate } from "react-router-dom";

export const Pedidos = () => {
  const arrayPedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  const [listaMenus, setListaMenus] = useState([]);
  const [listaPedidos, setListaPedidos] = useState([]);
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || {};
  const [usuario, setUsuario] = useState(usuarioLogueado);
  const [precioTotal, setPrecioTotal] = useState(0);
  const paginaPrincipal = useNavigate();

  const sumarPrecios = () => {
    let precios = 0;
    listaPedidos.forEach((menu) => {
      precios = parseInt(menu.precio) + precios;
    });
    return precios;
  };

  useEffect(() => {
    const sumatoriaPrecios = sumarPrecios();
    setPrecioTotal(sumatoriaPrecios);
  }, [listaPedidos]);

  const fechayHora = () => {
    const ahora = new Date();
    const dia = ahora.getDate();
    const mes = ahora.getMonth() + 1;
    const año = ahora.getFullYear();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const fechaHoraActual =
      dia + "/" + mes + "/" + año + " " + horas + ":" + minutos;
    return fechaHoraActual;
  };

  useEffect(() => {
    listarMenus()
      .then((resp) => {
        if (resp) {
          setListaMenus(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filtrarLista = () => {
    const arrayfiltrado = listaMenus.filter((menu) => {
      return arrayPedidos.includes(menu._id);
    });
    return arrayfiltrado;
  };

  useEffect(() => {
    setListaPedidos(filtrarLista());
  }, [listaMenus]);

  const agregarPedidos = () => {
    const fechaActual = fechayHora();
    const pedido = {
      usuario: usuario.nombre,
      fecha: fechaActual,
      menu: arrayPedidos,
      estado: false,
    };

    if (listaPedidos) {
      crearPedido(pedido)
        .then((resp) => {
          if (resp.status === 201) {
            Swal.fire(
              "Se creo su pedido con exito",
              "tu pedido sera procesado a la bebredad",
              "success"
            );
            localStorage.removeItem("pedidos");
            paginaPrincipal("/");
          }
        })
        .catch((error) => {
          console.log(error);
          Swal.fire("Hubo un error", "No se pudo crear el pedido", "error");
        });
    } else {
      Swal.fire("Hubo un error", "No a elegido ningun menu", "error");
    }
  };

  return (
    <div className="bg">
      <div className="containerDetalleMenu">
        <Container className="m-3">
          <div className=" d-flex flex-column flex-md-row justify-content-md-around flex-wrap align-items-center">
            {listaPedidos.map((menu) => (
              <CardPedidos key={menu._id} menu={menu}></CardPedidos>
            ))}
          </div>
        </Container>
        <Card className="colorbgButton text-center rounded my-4">
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text className="text-center fs-3">
              Total a pagar ${precioTotal}
            </Card.Text>
            <Button
              className="colorButton border-white text-dark"
              onClick={() => {
                if (precioTotal > 0) {
                  agregarPedidos();
                } else {
                  Swal.fire(
                    "Tienes que agregar Menus",
                    "puedes elegirlos en la pagina de inicio",
                    "warning"
                  );
                }
              }}
            >
              HACER PEDIDO
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Pedidos;
