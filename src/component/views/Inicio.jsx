import CarouselPrincipal from './inicio/CarouselPrincipal'
import "../../css/principal.css";
import { useEffect, useState } from 'react';
import { listarMenus } from '../helpers/queries';
import Swal from 'sweetalert2';
import FiltroBusqueda from './inicio/FiltroBusqueda';
import InfoRestaurant from './inicio/InfoRestaurant';
const Inicio = () => {
  const [ menus, setMenus ] =  useState([])
  useEffect(()=>{
    listarMenus().then((respuestaMenus) => {
      if (respuestaMenus) {
        setMenus(respuestaMenus);
      } else {
        Swal.fire("Ocurrio un error", "Intente de nuevo", "error");
      }
    });
  },[])
  return (
    <main>
      <section>
        <CarouselPrincipal />
      </section>
      <section className=''>
        <InfoRestaurant></InfoRestaurant>
      </section>
      <section>
        <FiltroBusqueda comidas={ menus } />
      </section>
    </main>
  );
};

export default Inicio;
