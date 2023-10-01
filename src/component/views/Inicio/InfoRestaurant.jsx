import { useNavigate } from "react-router-dom";
import CartelCellPhone from "/public/img-slider-main/CartelCellPhone.jpg";

export default function InfoRestaurant() {
  const acercaDe = useNavigate();
  return (
    <section className="container-info">
      <article className="row row-cols-1 row-cols-md-2">
        <aside className="my-2 text-center">
          <img src={CartelCellPhone} alt="" className="img-fluid" />
        </aside>
        <aside className="info">
          <h1>La campiña</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et
            velit cupiditate sunt debitis aut nemo a cum, obcaecati voluptas
            laudantium officia voluptates soluta porro maiores ut perspiciatis
            aspernatur, enim molestias. Excepturi accusamus quibusdam
            perferendis praesentium harum architecto omnis laborum iusto magnam,
            eligendi, natus accusantium vel neque molestias officiis, vitae
            recusandae perspiciatis voluptatum cumque expedita adipisci?
            Explicabo deleniti veniam cupiditate esse sequi sint repellat ad,
            temporibus ipsum, debitis doloremque asperiores molestiae dolore
            exercitationem. Suscipit molestiae accusantium sed atque aut
            architecto, corporis saepe, minima eaque temporibus explicabo,
            obcaecati voluptatum eveniet alias odio vero soluta adipisci sunt
            culpa labore hic! Eum, nesciunt.
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
