import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "../../css/AcercaDeNosotros.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const AcercaDeNosotros = () => {
  useEffect(() => {
    document.title = "La Campiña | Acerca de Nosotros";
  }, []);

  return (
    <Container>
      <Container className="bg-dark rounded">
        <div className="text-white p-3 my-3 ">
          <h1 className="text-white estilo-letras">Acerca de Nosotros</h1>
          <p className="estilo-texto">
            ¡Bienvenidos a nuestro equipo de desarrolladores apasionados por la
            creación de experiencias culinarias únicas en línea! Somos un grupo
            de seis amantes de la tecnología que comparten una profunda pasión
            por la comida y la innovación. Nos hemos unido para llevarles una
            experiencia excepcional en línea en el mundo de la gastronomía.
          </p>
          <p className="estilo-texto">
            Nuestra misión es transformar la forma en que las personas disfrutan
            de la comida en línea, proporcionando un ambiente virtual que
            refleje la misma calidez y autenticidad que encontrarías en un
            restaurante de lujo. Con un compromiso inquebrantable con la calidad
            y la atención a los detalles, trabajamos incansablemente para
            brindarte una experiencia gastronómica que te haga sentir como si
            estuvieras en la comodidad de tu propio hogar.
          </p>
        </div>
      </Container>
      <div className="bg-dark rounded p-3 my-3">
        <h2 className="text-white estilo-letras">Nuestro equipo:</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <Card className="card-acerca-de">
            <Card.Img
              variant="top"
              alt="imagen de integrante del grupo"
              src="http://imgfz.com/i/iULBrsS.jpeg"
              className= "img-card-acercade"
            />
            <Card.Body className="bg-black text-white">
              <Card.Title className="text-center">
                Nicolás Almirón
              </Card.Title>
              <Card.Text className="text-center">
                Tech Lead
              </Card.Text>
              <Col className="d-flex justify-content-around">
                <a
                  href="https://www.linkedin.com/in/nicolas-almiron-354254264/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://github.com/NicoAlmiron"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </Col>
            </Card.Body>
          </Card>
          <Card className="card-acerca-de">
            <Card.Img
              variant="top"
              alt="imagen de integrante del grupo"
              src="http://imgfz.com/i/pOd92Zi.jpeg"
              className= "img-card-acercade"
            />
            <Card.Body className="bg-black text-white">
              <Card.Title className="text-center">
                Mauricio Aguirre
              </Card.Title>
              <Card.Text className="text-center">
                Developer
              </Card.Text>
              <Col className="d-flex justify-content-around">
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://github.com/Moricegram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </Col>
            </Card.Body>
          </Card>
          <Card className="card-acerca-de">
            <Card.Img
              variant="top"
              alt="imagen de integrante del grupo"
              src="http://imgfz.com/i/eqLlkxF.jpeg"
              className= "img-card-acercade"
            />
            <Card.Body className="bg-black text-white">
              <Card.Title className="text-center">
                Matias Nicolas Ortega
              </Card.Title>
              <Card.Text className="text-center">
                Scrum Master
              </Card.Text>
              <Col className="d-flex justify-content-around">
                <a
                  href="https://www.linkedin.com/in/matias-ortega-fsd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://github.com/matiasfsd7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </Col>
            </Card.Body>
          </Card>
          <Card className="card-acerca-de">
            <Card.Img
              variant="top"
              alt="imagen de integrante del grupo"
              src="http://imgfz.com/i/5JbDQzj.jpeg"
              className= "img-card-acercade"
            />
            <Card.Body className="bg-black text-white">
              <Card.Title className="text-center">
                Lucas Daniel Figueroa
              </Card.Title>
              <Card.Text className="text-center">
                Developer
              </Card.Text>
              <Col className="d-flex justify-content-around">
                <a
                  href="https://www.linkedin.com/in/lucas-daniel-figueroa-0a10b222b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://github.com/lucatoni99"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </Col>
            </Card.Body>
          </Card>
          <Card className="card-acerca-de">
            <Card.Img
              variant="top"
              alt="imagen de integrante del grupo"
              src="https://i.ibb.co/X8VxnjK/Whats-App-Image-2023-10-01-at-9-06-02-PM.jpg"
              className= "img-card-acercade"
            />
            <Card.Body className="bg-black text-white">
              <Card.Title className="text-center">
                Federico Iñigo Andrada
              </Card.Title>
              <Card.Text className="text-center">
                Developer
              </Card.Text>
              <Col className="d-flex justify-content-around">
                <a
                  href="https://www.linkedin.com/in/inigo-federico"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://github.com/inigofede"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </Col>
            </Card.Body>
          </Card>
          <Card className="card-acerca-de">
            <Card.Img
              variant="top"
              alt="imagen de integrante del grupo"
              src="http://imgfz.com/i/8Ju4AZC.jpeg"
              className= "img-card-acercade"
            />
            <Card.Body className="bg-black text-white">
              <Card.Title className="text-center">
                Tufí Quipildor
              </Card.Title>
              <Card.Text className="text-center">
                Developer
              </Card.Text>
              <Col className="d-flex justify-content-around">
                <a
                  href="https://www.linkedin.com/in/vik-thq/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://www.github.com/TQcmd37"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </Col>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default AcercaDeNosotros;
