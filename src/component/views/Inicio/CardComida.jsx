import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CardComida({ imagen, nombreMenu, precio, _id }) {
  const login = useNavigate();
  const usuario = JSON.parse(sessionStorage.getItem("usuarioLogueado")) || null;
  let arrayPedido = JSON.parse(localStorage.getItem("pedidos")) || [];
  const [listaPedidos, setListaPedidos] = useState(arrayPedido);

  useEffect(() => {
    localStorage.setItem("pedidos", JSON.stringify(listaPedidos));
  }, [listaPedidos]);

  const handelAgregar = () => {
    if (usuario) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Listo!",
        showConfirmButton: false,
        timer: 1500,
      });
      setListaPedidos([...listaPedidos, _id]);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Inicia sesión para preparar tu pedido",
        confirmButtonColor: "#F1B708",
      });
      login("/login");
    }
  };

  return (
    <section className="col mb-2">
      <div className="card p-0 h-100">
        <img src={imagen} className="w-100 h-100" alt={nombreMenu} />
        <div className="position-absolute detalle-menu">
          <article className="contenido-detalle d-flex flex-column justify-content-center align-items-center">
            <div className="mb-2">
              <button className="btn-agregar rounded" onClick={handelAgregar}>
                Agregar al pedido
              </button>
            </div>
            <h5 className="card-title text-white">{nombreMenu}</h5>
            <span className="text-white">$ {precio}</span>
            <Link
              to={"/detalle-menu/" + _id}
              className="text-decoration-none mt-2 btn btn-outline-warning"
            >
              Ver mas
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
