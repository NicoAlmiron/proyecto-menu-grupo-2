import "../css/Login.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";

const Login = ({ setUsuarioActivo }) => {
  useEffect(() => {
    document.title = "Iniciar sesion";
  }, []);

  const navegacion = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (usuario) => {
    login(usuario).then((respuesta) => {
      if (respuesta) {
        Swal.fire(
          "¡Bienvenido " + respuesta.nombreUsuario + "!",
          "Te logueaste correctamente!",
          "success"
        );
        sessionStorage.setItem("usuarioLogueado", JSON.stringify(respuesta));
        setUsuarioActivo(respuesta);
        reset();
        navegacion("/");
      } else {
        Swal.fire("Oops!", "Hay algun error en los datos ingresados!", "error");
        reset();
      }
    });
  };

  return (
    <>
      <div className="d-flex justify-content-center bgLogin place-login">
        <Container className="bg-light mb-4 mb-lg-auto rounded-4 shadow cont-login">
          <h4 className="fw-bold title-page-login">
            Acceder o crear una cuenta
          </h4>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
            <FloatingLabel label="Correo electronico" className="mb-3">
              <Form.Control
                type="email"
                placeholder="nombre@ejemplo.com"
                {...register("email", {
                  required: "El email es un dato obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message:
                      "El email debe cumplir con un formato valido, ej: nombre@mail.com",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </FloatingLabel>
            <FloatingLabel label="password" className="mb-3">
              <Form.Control
                type="password"
                placeholder="password"
                {...register("password", {
                  required: "El password es un dato obligatorio",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "El password debe contener al menos una letra mayuscula, una minuscula, un numero y entre 8 y 16 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </FloatingLabel>
            <Button
              variant="primary"
              type="submit"
              className="btn btn-accederLogin border-0 shadow"
            >
              Acceder
            </Button>
            <div className="text-end">
              <Link as={Link} to={"/altausuario"}>
                Crear cuenta
              </Link>
            </div>

            <h5 className="mt-4 mb-3 subtitle-page-login">
              Acceso rapido con:
            </h5>

            <div className="conteiner px-3 py-1">
              <Row className="gx-3 py-1 gy-2 justify-content-center">
                <Col xs={12} md={4} lg={4} className="text-center px-1">
                  <Button
                    as={Link}
                    to={"/error404"}
                    variant="light"
                    type="submit"
                    className="font-btn-social border-light-subtle shadow btn-social"
                  >
                    <img
                      src="/public/google.svg"
                      alt="logo google"
                      className="logo-btn-social"
                    ></img>
                    Google
                  </Button>
                </Col>
                <Col xs={12} md={4} lg={4} className="text-center px-1">
                  <Button
                    as={Link}
                    to={"/error404"}
                    variant="light"
                    type="submit"
                    className="font-btn-social shadow btn-social"
                  >
                    <img
                      src="/public/facebook.svg"
                      alt="logo facebook"
                      className="logo-btn-social"
                    ></img>
                    Facebook
                  </Button>
                </Col>
                <Col xs={12} md={4} lg={4} className="text-center px-1">
                  <Button
                    as={Link}
                    to={"/error404"}
                    variant="light"
                    type="submit"
                    className="font-btn-social shadow btn-social"
                  >
                    <img
                      src="/public/paypal.svg"
                      alt="logo paypal"
                      className="logo-btn-social"
                    ></img>
                    PayPal
                  </Button>
                </Col>
              </Row>

              <Row className="gx-3 py-1 gy-2 justify-content-center">
                <Col xs={12} md={4} lg={4} className="text-center px-1">
                  <Button
                    as={Link}
                    to={"/error404"}
                    variant="light"
                    type="submit"
                    className="font-btn-social border-light-subtle shadow btn-social"
                  >
                    <img
                      src="/public/tiktok.svg"
                      alt="logo tiktok"
                      className="logo-btn-social"
                    ></img>
                    TikTok
                  </Button>
                </Col>
                <Col xs={12} md={4} lg={4} className="text-center px-1">
                  <Button
                    as={Link}
                    to={"/error404"}
                    variant="light"
                    type="submit"
                    className="font-btn-social border-light-subtle shadow btn-social"
                  >
                    <img
                      src="/public/twitch.svg"
                      alt="logo twitch"
                      className="logo-btn-social"
                    ></img>
                    Twitch
                  </Button>
                </Col>
                <Col xs={12} md={4} lg={4} className="text-center px-1">
                  <Button
                    as={Link}
                    to={"/error404"}
                    variant="light"
                    type="submit"
                    className="font-btn-social border-light-subtle shadow btn-social"
                  >
                    <img
                      src="/public/twitter.svg"
                      alt="logo twitter"
                      className="logo-btn-social"
                    ></img>
                    Twitter
                  </Button>
                </Col>
              </Row>

              <Row className="gx-3 py-1 gy-2 justify-content-center">
                <Col xs={12} md={4} lg={4} className="text-center px-1">
                  <Button
                    as={Link}
                    to={"/error404"}
                    variant="light"
                    type="submit"
                    className="font-btn-social border-light-subtle shadow btn-social"
                  >
                    <img
                      src="/public/apple.svg"
                      alt="logo apple"
                      className="logo-btn-social"
                    ></img>
                    Apple
                  </Button>
                </Col>
                <Col xs={12} md={8} lg={8} className="text-center px-1">
                  <Button
                    as={Link}
                    to={"/error404"}
                    variant="light"
                    type="submit"
                    className="font-btn-social border-light-subtle shadow btn-social"
                  >
                    <img
                      src="/public/telefono.svg"
                      alt="logo telefono"
                      className="logo-btn-social"
                    ></img>
                    Teléfono-sólo vendedores
                  </Button>
                </Col>
              </Row>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Login;