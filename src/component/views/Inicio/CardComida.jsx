import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CardComida({ imagen, nombreMenu, precio, id }) {
  const usuario =JSON.parse( sessionStorage.getItem('usuarioLogueado')) || null
  const handelAgregar = () =>{
    if(usuario){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Listo!',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Inicia sesión para preparar tu pedido',
        confirmButtonColor:'#F1B708'
      })
      //esto no anda
      return <Navigate to={'/login'} />
    }
  }

  return (
    <section className='col mb-2'>
      <div className='card p-0 h-100'>
        <img src={imagen} className='w-100' alt={nombreMenu} />
        <div className='position-absolute detalle-menu'>
          <article className="contenido-detalle d-flex flex-column justify-content-center align-items-center">
            <div className="mb-2">
            <button className="btn-agregar" onClick={handelAgregar}>Agregar al pedido</button>
            </div>
            <h5 className='card-title text-white'>{nombreMenu}</h5>
            <span>$ {precio}</span>
            <Link to={"/menu/" + id} className='text-decoration-none mt-2'>
              Ver mas
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
