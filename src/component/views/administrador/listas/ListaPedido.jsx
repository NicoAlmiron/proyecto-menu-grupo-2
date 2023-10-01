import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ItemPedido from "../items/ItemPedido";
import ItemPlaceholder from "../items/ItemPlaceholder";
import { listarPedidos } from "../../../helpers/queries";
import Paginacion from "../Paginacion";

const ListaPedido = () => {
  const [listaPedidos, setListaPedidos] = useState([]);
  const [mostrarSpinner, setMostrarSpinner] = useState(true);
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(5);

  let maximo = Math.ceil(listaPedidos?.length / porPagina) || 0;

  useEffect(() => {
    listarPedidos()
      .then((resp) => {
        if (resp) {
          setMostrarSpinner(false);
          setListaPedidos(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const ordenarClienteAlfabeticamente = () => {
    const arrayOrdenado = [...listaPedidos].sort((a, b) => {
      const nombreA = a.usuario.toLowerCase();
      const nombreB = b.usuario.toLowerCase();
      return nombreA.localeCompare(nombreB);
    });
    setListaPedidos(arrayOrdenado);
  };

  return (
    <>
      <Table striped hover variant="warning" className="shadow" responsive>
        <thead>
          <tr>
            <th className="fs-5 fw-light text-center">Pedidos</th>
            <th
              className="fs-5 fw-light text-center btn-lista-pedido"
              onClick={ordenarClienteAlfabeticamente}
            >
              Cliente
            </th>
            <th className="fs-5 fw-light text-center">Fecha</th>
            <th className="fs-5 fw-light text-center ">Estado</th>
            <th className="fs-5 fw-light text-center">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {!mostrarSpinner ? (
            listaPedidos.map((pedido) => (
              <ItemPedido
                key={pedido.id}
                pedido={pedido}
                setListaPedidos={setListaPedidos}
              ></ItemPedido>
            ))
          ) : (
            <ItemPlaceholder></ItemPlaceholder>
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

export default ListaPedido;
