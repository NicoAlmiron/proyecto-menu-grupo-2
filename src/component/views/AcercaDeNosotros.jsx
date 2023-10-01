import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../../css/AcercaDeNosotros.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

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
              src="https://img.asmedia.epimg.net/resizer/CaE7_mEOZY44kX0U16HKfdPAfb8=/1472x1104/filters:focal(1344x246:1354x256)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/DETH5T5Z54WCFJ4AH7EV6ACU2A.jpg"
            />
            <Card.Body className="bg-black text-white">
              <Card.Title className="text-center">
                Nombre del integrante
              </Card.Title>
              <Card.Text className="text-center">
                Descripcion del puesto
              </Card.Text>
              <Col className="d-flex justify-content-around">
                <a
                  href="https://www.linkedin.com/in/tupagina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://github.com/tuperfil"
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
              src="https://img.asmedia.epimg.net/resizer/CaE7_mEOZY44kX0U16HKfdPAfb8=/1472x1104/filters:focal(1344x246:1354x256)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/DETH5T5Z54WCFJ4AH7EV6ACU2A.jpg"
            />
            <Card.Body className="bg-black text-white">
              <Card.Title className="text-center">
                Nombre del integrante
              </Card.Title>
              <Card.Text className="text-center">
                Descripcion del puesto
              </Card.Text>
              <Col className="d-flex justify-content-around">
                <a
                  href="https://www.linkedin.com/in/tupagina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://github.com/tuperfil"
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
              src="https://img.asmedia.epimg.net/resizer/CaE7_mEOZY44kX0U16HKfdPAfb8=/1472x1104/filters:focal(1344x246:1354x256)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/DETH5T5Z54WCFJ4AH7EV6ACU2A.jpg"
            />
            <Card.Body className="bg-black text-white">
              <Card.Title className="text-center">
                Nombre del integrante
              </Card.Title>
              <Card.Text className="text-center">
                Descripcion del puesto
              </Card.Text>
              <Col className="d-flex justify-content-around">
                <a
                  href="https://www.linkedin.com/in/tupagina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://github.com/tuperfil"
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
              src="https://img.asmedia.epimg.net/resizer/CaE7_mEOZY44kX0U16HKfdPAfb8=/1472x1104/filters:focal(1344x246:1354x256)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/DETH5T5Z54WCFJ4AH7EV6ACU2A.jpg"
            />
            <Card.Body className="bg-black text-white">
              <Card.Title className="text-center">
                Nombre del integrante
              </Card.Title>
              <Card.Text className="text-center">
                Descripcion del puesto
              </Card.Text>
              <Col className="d-flex justify-content-around">
                <a
                  href="https://www.linkedin.com/in/tupagina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://github.com/tuperfil"
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
              src="https://img.asmedia.epimg.net/resizer/CaE7_mEOZY44kX0U16HKfdPAfb8=/1472x1104/filters:focal(1344x246:1354x256)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/DETH5T5Z54WCFJ4AH7EV6ACU2A.jpg"
            />
            <Card.Body className="bg-black text-white">
              <Card.Title className="text-center">
                Nombre del integrante
              </Card.Title>
              <Card.Text className="text-center">
                Descripcion del puesto
              </Card.Text>
              <Col className="d-flex justify-content-around">
                <a
                  href="https://www.linkedin.com/in/tupagina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://github.com/tuperfil"
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
              src="https://img.asmedia.epimg.net/resizer/CaE7_mEOZY44kX0U16HKfdPAfb8=/1472x1104/filters:focal(1344x246:1354x256)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/DETH5T5Z54WCFJ4AH7EV6ACU2A.jpg"
            />
            <Card.Body className="bg-black text-white">
              <Card.Title className="text-center">
                Nombre del integrante
              </Card.Title>
              <Card.Text className="text-center">
                Descripcion del puesto
              </Card.Text>
              <Col className="d-flex justify-content-around">
                <a
                  href="https://www.linkedin.com/in/tupagina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://github.com/tuperfil"
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
