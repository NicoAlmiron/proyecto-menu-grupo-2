import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

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
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Img
          variant="bottom"
          src="https://us.123rf.com/450wm/dsan4o/dsan4o1802/dsan4o180200019/94811756-filete-de-carne-marmoleada-cruda-con-ingredientes-para-cocinar-sobre-fondo-de-piedra-oscura.jpg?ver=6"
        />
      </Card>
    </>
  );
}
export default DetalleMenu;
