import { Col, Card, Button } from "react-bootstrap";
import "../../css/pedidos.css";

const CardPedidos = ({ menu }) => {
  return (
    <div>
      <Col md={4} ld={3} className="mb-3 ">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={menu.imagen} alt={menu.nombreMenu} />
          <Card.Body>
            <Card.Title>{menu.nombreMenu}</Card.Title>
            <Card.Text>{menu.detalle}</Card.Text>
            <Button variant="primary"> ${menu.precio} </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};
export default CardPedidos;
