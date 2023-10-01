import { useEffect, useState } from "react";
import ContenedorComidas from "./ContenedorComidas.jsx";
import SelectCategorias from "./SelectCategorias.jsx";

const FiltroBusqueda = ({ comidas }) => {
  const [comidaBuscada, setComidaBuscada] = useState("");
  const [categoria, setCategoria] = useState("");
  const [copiaComidas, setCopiaComidas] = useState([]);
  useEffect(() => {
    setCopiaComidas(comidas);
  }, [comidas]);

  const filtroBusqueda = (e) => {
    e.preventDefault();
    const valorBuscado = e.target.value;
    setComidaBuscada(valorBuscado);

    if (!valorBuscado && !categoria) {
      setCopiaComidas(comidas);
    } else {
      const comidasBuscadas = copiaComidas.filter((comida) =>
        comida.nombreMenu.toLowerCase().includes(comidaBuscada.toLowerCase())
      );
      if (comidasBuscadas.length > 0) {
        setCopiaComidas(comidasBuscadas);
      }
    }
  };
  return (
    <section className="container">
      <form className="row my-4 justify-content-between" id="input-busqueda">
        <aside className="col-lg-8 align-item-center">
          <input
            className="w-100 h-100"
            type="text"
            placeholder="¿Que quieres comer?"
            value={comidaBuscada}
            onInput={filtroBusqueda}
          ></input>
        </aside>
        <aside className="col-lg-4">
          <SelectCategorias
            categoria={categoria}
            setCategoria={setCategoria}
            setCopiaComidas={setCopiaComidas}
            comidas={comidas}
            copiaComidas={copiaComidas}
          ></SelectCategorias>
        </aside>
      </form>
      <ContenedorComidas copiaComidas={copiaComidas} />
    </section>
  );
};

export default FiltroBusqueda;
