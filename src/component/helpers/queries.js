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

// export const listarPedidos = async () => {
//   try {
//     const respuesta = await fetch(uriPedidos);
//     const listadoPedidos = await respuesta.json();
//     return listadoPedidos;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };
