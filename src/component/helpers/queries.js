const uriUsuario = import.meta.env.VITE_API_USUARIOS;

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(uriUsuario);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const altaUsuario = async (usuarioNuevo) => {
  usuarioNuevo.juegosFavoritos = [];
  try {
    const resp = await fetch(uriUsuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioNuevo),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};
