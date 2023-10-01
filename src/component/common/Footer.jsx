import { Link } from "react-router-dom";
import { twiter, instagram, facebook, tiktok } from "../helpers/redes-iconos";
const Footer = () => {
  return (
    <footer className='text-light text-center'>
      <section className='container my-5'>
        <div className='row align-items-center'>
          <aside className='col-md-4'>
            <Link to={"/"}>
              <img src='/navbar/logo.png' alt='Logo La campiña' />
            </Link>
          </aside>
          <aside className='col-md-4 my-3 my-md-0'>
            <ul>
              <li>
                <Link className='nav-link'>Sobre nosotros</Link>
              </li>
              <li>
                <Link className='nav-link'>¿Como trabajar con nosotros?</Link>
              </li>
              <li>
                <Link className='nav-link'>Certificaciones</Link>
              </li>
              <li>
                <Link className='nav-link'>Preguntas frecuentes</Link>
              </li>
            </ul>
          </aside>
          <aside className='col-md-4 p-0'>
            <h2>Redes</h2>
            <article className='d-flex justify-content-around my-5 my-md-3'>
              <div>
                <Link to={"/error"}>{twiter}</Link>
              </div>
              <div>
                <Link to={"/error"}>{instagram}</Link>
              </div>
              <div>
                <Link to={"/error"}>{facebook}</Link>
              </div>
              <div>
                <Link to={"/error"}>{tiktok}</Link>
              </div>
            </article>
          </aside>
        </div>
      </section>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
