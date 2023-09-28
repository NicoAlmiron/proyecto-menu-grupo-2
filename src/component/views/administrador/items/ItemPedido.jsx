import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {
  realizarPedido,
  deshacerPedido,
  borrarPedido,
  listarPedidos,
  listarMenus,
} from "../../../helpers/queries";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import ListaItemPedido from "./ListaItemPedido";

const ItemPedido = ({ pedido, setListaPedidos }) => {
  const [estadoPedido, setEstadoPedido] = useState(pedido.estado);
  const [listaMenus, setListaMenus] = useState([]);
  const [menuPedido, setMenuPedido] = useState([]);

  const pedidoRealizado = () => {
    if (!pedido.estado) {
      pedido.estado = true;
      realizarPedido(pedido.id, pedido)
        .then((resp) => {
          if (resp.status === 200) {
            Swal.fire(
              "Se realizo con exito",
              `El pedido: ${pedido.menu}!`,
              "success"
            );
            setEstadoPedido(pedido.estado);
          }
        })
        .catch((error) => {
          console.log(error);
          Swal.fire("Hubo un error", `Codigo de error: ${error}`, "error");
        });
    }
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

  useEffect(() => {
    const arrayBuscado = pedido.menu;
    const arrayfiltrado = listaMenus.filter((menu) => {
      return arrayBuscado.includes(menu.id);
    });
    setMenuPedido(arrayfiltrado);
  }, [listaMenus]);

  const pedidoDeshecho = () => {
    if (pedido.estado) {
      pedido.estado = false;
      deshacerPedido(pedido.id, pedido)
        .then((resp) => {
          if (resp.status === 200) {
            Swal.fire(
              `El pedido ${pedido.menu}`,
              "Se a deshecho con exito!",
              "success"
            );
            setEstadoPedido(pedido.estado);
          }
        })
        .catch((error) => {
          console.log(error);
          Swal.fire(
            "A ocurrido un error",
            `Codigo de error: ${error}`,
            "error"
          );
        });
    }
  };

  const borrarPedidoSelect = () => {
    Swal.fire({
      title: `Estas seguro de eliminar ${pedido.menu}?`,
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
          borrarPedido(pedido.id)
            .then((resp) => {
              if (resp.status === 200) {
                listarPedidos()
                  .then((resp) => {
                    setListaPedidos(resp);
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
                  "Pedido Eliminado",
                  `El Pedido se a eliminado con exito`,
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
      <td>
        <ul>
          {menuPedido?.map((menu) => (
            <ListaItemPedido key={menu.id} {...menu}></ListaItemPedido>
          ))}
        </ul>
      </td>
      <td>
        <p className="fw-light text-center">{pedido.usuario}</p>
      </td>
      <td>
        <p className="fw-light text-center">{pedido.fecha}</p>
      </td>
      <td>
        {pedido.estado ? (
          <p className="fw-light text-center text-success">Realizado</p>
        ) : (
          <p className="fw-light text-center text-danger">Pendiente</p>
        )}
        <p className="fw-light text-center"></p>
      </td>
      <td>
        {estadoPedido ? (
          <div className="text-center">
            <Button variant="warning" onClick={pedidoDeshecho}>
              <FontAwesomeIcon icon={faArrowsRotate} className="me-1" />
              Deshacer
            </Button>
            <Button
              variant="danger"
              className="ms-md-2"
              onClick={borrarPedidoSelect}
            >
              <FontAwesomeIcon icon={faTrash} className="me-1" />
              Borrar
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <Button variant="success" onClick={pedidoRealizado}>
              <FontAwesomeIcon icon={faCircleCheck} className="me-1" />
              Realizar
            </Button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default ItemPedido;
