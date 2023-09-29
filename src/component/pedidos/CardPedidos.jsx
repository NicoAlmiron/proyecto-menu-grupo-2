import { Card, Button } from "react-bootstrap";
import "../../css/pedidos.css";

const CardPedidos = ({ menu }) => {
  return (
    <Card className="m-2 cardPedidos ">
      <Card.Img
        variant="top"
        src={menu.imagen}
        alt={menu.nombreMenu}
        className="cardImg"
      />
      <Card.Body className="bg-dark">
        <Card.Title className="text-white text-center">
          {menu.nombreMenu}
        </Card.Title>
        <Card.Text className="text-white text-center">{menu.detalle}</Card.Text>
        <Button
          variant="warning"
          size="lg"
          className="text-dark mx-auto d-block"
        >
          ${menu.precio}
        </Button>
      </Card.Body>
    </Card>
  );
};
export default CardPedidos;
