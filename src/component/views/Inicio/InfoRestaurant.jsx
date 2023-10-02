import { useNavigate } from "react-router-dom";
import CartelCellPhone from "/img-slider-main/CartelCellPhone.jpg";

export default function InfoRestaurant() {
  const acercaDe = useNavigate();
  return (
    <section className="container-info">
      <article className="row row-cols-1 row-cols-md-2">
        <aside className="my-2 text-center">
          <img src={CartelCellPhone} alt="" className="img-fluid" />
        </aside>
        <aside className="info">
          <h1 className="titulo-info">La campiña</h1>
          <p>
          ¡Bienvenido a La Campiña!

En nombre de todo nuestro equipo, queremos darte una cálida bienvenida a nuestra página gourmet. Aquí, no solo encontrarás exquisitas delicias culinarias, sino también un rincón donde la pasión por la programación se fusiona con el amor por el buen comer.

Somos un grupo consolidado de apasionados de la programación, pero también somos amantes de la gastronomía. Nuestra misión es combinar estas dos pasiones para crear una experiencia única para ti. Queremos acercarte al mundo de la buena comida de una manera especial, a través de recetas, consejos, y por supuesto, un toque de tecnología.

Nos hemos reunido en este proyecto con el propósito de llevar a cabo una página gourmet que no solo refleje nuestro amor por la programación, sino también nuestro deseo de compartir la alegría de disfrutar de exquisitos platos y experiencias culinarias memorables. Aquí, no solo encontrarás recetas y consejos, sino también historias y pasión por el buen comer.

Así que, querido usuario, prepárate para explorar un mundo de sabores y conocimientos culinarios con nosotros. Juntos, trabajamos cada día para mejorar tu experiencia y acercarte a la gastronomía de una manera única. ¡Bienvenido a La Campiña, donde la programación y el buen comer se unen para ofrecerte lo mejor de ambos mundos!

Si tienes alguna pregunta, sugerencia o simplemente quieres compartir tus pensamientos, no dudes en ponerte en contacto con nosotros. Estamos aquí para ti, ¡disfruta de tu visita!.
          </p>
          <div className="mt-4">
            <button
              className="btn-sobre-nosotros"
              onClick={() => acercaDe("/acerca-de-nosotros")}
            >
              Sobre nosotros
            </button>
          </div>
        </aside>
      </article>
    </section>
  );
}
