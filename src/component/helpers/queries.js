const uriMenus =
    import.meta.env.VITE_API_MENUS;

export const listarMenus = async() => {
    try {
        const respuesta = await fetch(uriMenus);
        const listaMenus = await respuesta.json();
        return listaMenus;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const crearMenu = async(menu) => {
    try {
        menu.estado = 'pendiente';
        const respuesta = await fetch(uriMenus, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(menu)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const obtenerMenu = async(id) => {
    try {
        const respuesta = await fetch(`${uriMenus}/${id}`);
        const menu = respuesta.json();
        return menu;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const editarMenu = async(id, menuEditado) => {
    try {
        menuEditado.estado = 'pendiente';
        const respuesta = await fetch(`${uriMenus}/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(menuEditado),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const borrarMenu = async(id) => {
    try {
        const respuesta = await fetch(`${uriMenus}/${id}`, {
            method: "DELETE"
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return null;
    }
}