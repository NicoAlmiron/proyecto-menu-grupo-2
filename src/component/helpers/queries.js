const uriPedidos = import.meta.env.VITE_API_PEDIDOS;
const uriMenus = import.meta.env.VITE_API_MENUS;

export const listarMenus = async () => {
  try {
    const respuesta = await fetch(uriMenus);
    const listaMenus = await respuesta.json();
    return listaMenus;
  } catch (error) {
    console.log(error);
  }
};

export const crearPedido = async (pedido) => {
  try {
    const respuesta = await fetch(uriPedidos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    });
  } catch (error) {
    console.log(error);
  }
};
