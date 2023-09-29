import CardComida from "./CardComida";

export default function ContenedorJuegos({ copiaComidas }) {
  return (
    <section>
      <article>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 d-flex flex-wrap justify-content-center justify-content-md-between mt-3">
          {copiaComidas.map((comida) => (
            <CardComida {...comida} key={comida.id}></CardComida>
          ))}
        </div>
      </article>
    </section>
  );
}
