import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function DetalleMenu() {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src="https://demos.hogash.com/dannys/wp-content/uploads/sites/4/2017/05/prod_09-300x300.jpg"
        />
        <Card.Body>
          <Card.Text>
            <h1>Receta de Berenjenas Rellenas</h1>
            <h2>Ingredientes (4 porciones)</h2>
            <ul>
              <li>4 berenjenas pequeñas o medianas</li>
              <li>1 cebolla grande</li>
              <li>2 dientes de ajo</li>
              <li>1 pimiento rojo</li>
              <li>1 tomate firme</li>
              <li>Sal, pimienta y perejil al gusto</li>
              <li>Aceite de oliva virgen extra</li>
              <li>Media cucharadita rasa de canela</li>
              <li>Media cucharadita de pimentón dulce</li>
              <li>Una cucharadita rasa de comino molido</li>
              <li>Una pizca de clavo de olor molido</li>
              <li>Zumo de limón al gusto</li>
            </ul>
            <Button variant="success">Añadir al carrito</Button>{" "}
            <Button variant="success">Ir al carrito</Button>{" "}
          </Card.Text>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://us.123rf.com/450wm/dsan4o/dsan4o1802/dsan4o180200019/94811756-filete-de-carne-marmoleada-cruda-con-ingredientes-para-cocinar-sobre-fondo-de-piedra-oscura.jpg?ver=6"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>ELABORACION</Card.Title>
              <Card.Text>
                <p>
                  Cortamos las berenjenas por la mitad a lo largo pero
                  respetando el cabito. También lo cortamos por la mitad. Con
                  una cuchara sacamos parte de la pulpa de las berenjenas, la
                  parte central, donde están las semillas. No hay que quitar
                  mucha pulpa, solo hacer un poco de hueco. Espolvoreamos con
                  sal fina y dejamos que suden unos 20 minutos. Después las
                  secamos con papel de cocina. Mientras sudan las berenjenas
                  hacemos el sofrito con los ingredientes del relleno. Rehogamos
                  en aceite la cebolla, el ajo y el pimiento, todo picado fino.
                  Si quieres puedes añadir la pulpa que has sacado de las
                  berenjenas también picada. Cuando esté pochado ponemos el
                  tomate pelado y cortado en dados. Agregamos perejil picado y
                  las especias: canela, comino, pimentón y clavo. Salpimentamos.
                  Hay que dejar que poche todo lentamente y la salsa espese.
                  Precalentamos el horno a 180 ºC. Vamos rellenando las
                  berenjenas con el sofrito y las colocamos en una bandeja de
                  horno. Regamos con un hilo de aceite de oliva y horneamos unos
                  45 minutos. Hay que poner en la parte media del horno y con
                  calor arriba y abajo. Si ves que se quema por encima, puedes
                  cubrir con papel de plata. Cuando la berenjena esté muy tierna
                  (pincha con un palillo) las sacamos y dejamos templar antes de
                  servir. También pueden servirse frías. A la hora de servir las
                  berenjenas rellenas estilo turco regamos con unas gotas de
                  zumo de limón y espolvoreamos con más perejil picado.
                </p>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}
export default DetalleMenu;
