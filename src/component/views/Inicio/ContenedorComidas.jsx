import { useState } from "react";
import CardComida from "./CardComida";
import Paginacion from "../Paginacion";

export default function ContenedorJuegos({ copiaComidas }) {
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(6);

  let maximo = Math.ceil(copiaComidas?.length / porPagina) || 0;
  return (
    <section>
      <article>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 d-flex flex-wrap justify-content-center justify-content-md-between mt-3">
          {copiaComidas
            .slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            )
            .map((comida) => (
              <CardComida {...comida} key={comida._id}></CardComida>
            ))}
        </div>
      </article>
      <Paginacion
        pagina={pagina}
        setPagina={setPagina}
        maximo={maximo}
      ></Paginacion>
    </section>
  );
}
