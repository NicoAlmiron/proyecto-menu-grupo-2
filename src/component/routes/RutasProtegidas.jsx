import React from "react";
import { Route, Routes } from "react-router";
import Administrador from "../views/Administrador";
import CrearMenu from "../views/administrador/CrearMenu";
import EditarMenu from "../views/administrador/EditarMenu";
import CrearUsuario from "../views/administrador/CrearUsuario";

const RutasProtegidas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Administrador></Administrador>} />
      <Route exact path="/crear-menu" element={<CrearMenu></CrearMenu>}></Route>
      <Route
        exact
        path="/crear-usuario"
        element={<CrearUsuario></CrearUsuario>}
      ></Route>
      <Route
        exact
        path="/editar-menu/:id"
        element={<EditarMenu></EditarMenu>}
      ></Route>
    </Routes>
  );
};

export default RutasProtegidas;
