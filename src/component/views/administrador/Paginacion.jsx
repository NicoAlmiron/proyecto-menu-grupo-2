import {
  faSquareCaretRight,
  faSquareCaretLeft,
} from "@fortawesome/free-regular-svg-icons";
// import { faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Paginacion = ({ pagina, setPagina, maximo }) => {
  const [nroPagina, setNroPagina] = useState(1);

  const paginaSiguiente = () => {
    if (pagina < maximo) {
      setNroPagina(nroPagina + 1);
      setPagina(pagina + 1);
    }
  };
  const paginaAnterior = () => {
    if (pagina > 1) {
      setNroPagina(nroPagina - 1);
      setPagina(pagina - 1);
    }
  };

  return (
    <div className="d-flex justify-content-center my-4 align-items-center">
      <Button variant="dark" className="btn-sm shadow" onClick={paginaAnterior}>
        <FontAwesomeIcon
          icon={faSquareCaretLeft}
          className="fs-3 text-warning"
        />
      </Button>
      <div className="px-3 d-flex justify-content-center align-items-center bg-dark ">
        <p className="fw-light fs-5 me-2 text-warning mb-0">{nroPagina}</p>
        <p className="fw-light fs-5 mb-0 text-warning">de {maximo}</p>
      </div>
      <Button
        variant="dark"
        className="btn-sm shadow"
        onClick={paginaSiguiente}
      >
        <FontAwesomeIcon
          icon={faSquareCaretRight}
          className="fs-3 text-warning"
        />
      </Button>
    </div>
  );
};

export default Paginacion;
