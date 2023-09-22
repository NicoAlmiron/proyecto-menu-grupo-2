const uriPedidos = import.meta.env.VITE_API_PEDIDOS;

const listarPedidos = async () => {
  try {
    const respuesta = await fetch(uriPedidos);
    const listadoPedidos = await respuesta.json();
    return listadoPedidos;
  } catch (error) {
    console.log(error);
    return null;
  }
};
