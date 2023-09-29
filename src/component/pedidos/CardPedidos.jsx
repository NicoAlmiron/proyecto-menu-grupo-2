import { Col, Card, Button } from "react-bootstrap";
import "../../css/pedidos.css";

const CardPedidos = ({ menu }) => {
  return (
    <div>
      {/* <Col md={4} ld={3} className="mb-3"> */}
      <Card className="mt-2 cardPedidos">
        <Card.Img variant="top" src={menu.imagen} alt={menu.nombreMenu} />
        <Card.Body className="bg-dark">
          <Card.Title className="text-white text-center">
            {menu.nombreMenu}
          </Card.Title>
          <Card.Text className="text-white text-center">
            {menu.detalle}
          </Card.Text>
          <Button variant="warning" className="text-dark mx-auto d-block">
            ${menu.precio}
          </Button>
        </Card.Body>
      </Card>

      {/* </Col> */}
    </div>
  );
};
export default CardPedidos;
