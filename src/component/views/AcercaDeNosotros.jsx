import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./AcercaDeNosotros.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const AcercaDeNosotros = () => {
  return (
    <Container className="bg-dark text-white">
      <Row>
        <Col md={10}>
          <h1>Acerca de Nosotros</h1>
          <p>
            ¡Bienvenidos a nuestro equipo de desarrolladores apasionados por la
            creación de experiencias culinarias únicas en línea! Somos un grupo
            de seis amantes de la tecnología que comparten una profunda pasión
            por la comida y la innovación. Nos hemos unido para llevarles una
            experiencia excepcional en línea en el mundo de la gastronomía.
          </p>
          <p>
            Nuestra misión es transformar la forma en que las personas disfrutan
            de la comida en línea, proporcionando un ambiente virtual que
            refleje la misma calidez y autenticidad que encontrarías en un
            restaurante de lujo. Con un compromiso inquebrantable con la calidad
            y la atención a los detalles, trabajamos incansablemente para
            brindarte una experiencia gastronómica que te haga sentir como si
            estuvieras en la comodidad de tu propio hogar.
          </p>
        </Col>
        <Col md={6}>{/* imagen de grupo */}</Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col key={idx}>
            <Card className="bg-dark border-white">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title className="text-white">
                  Nombre Integrante
                </Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Col className="margin-10">
                <a
                  href="https://www.facebook.com/tupagina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a
                  href="https://www.instagram.com/tupagina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tupagina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </Col>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AcercaDeNosotros;
