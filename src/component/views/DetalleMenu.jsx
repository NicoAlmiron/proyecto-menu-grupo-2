import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../css/DetalleMenu.css";
import { CardGroup } from "react-bootstrap";

const DetalleMenu = () => {
  return (
    <div className="bg">
      <div className="containerDetalleMenu">
        <CardGroup className="m-4">
          <div className="p-2 ">
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn-3.expansion.mx/dims4/default/c71819c/2147483647/strip/true/crop/5472x3648+0+0/resize/1200x800!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fee%2Fdc%2F9d962ff94b5a83fa86f964c6bf4c%2Fistock-1271195362.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="p-2">
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn-3.expansion.mx/dims4/default/c71819c/2147483647/strip/true/crop/5472x3648+0+0/resize/1200x800!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fee%2Fdc%2F9d962ff94b5a83fa86f964c6bf4c%2Fistock-1271195362.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="p-2">
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn-3.expansion.mx/dims4/default/c71819c/2147483647/strip/true/crop/5472x3648+0+0/resize/1200x800!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fee%2Fdc%2F9d962ff94b5a83fa86f964c6bf4c%2Fistock-1271195362.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </CardGroup>
      </div>
    </div>
  );
};

export default DetalleMenu;
