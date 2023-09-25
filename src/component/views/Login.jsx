import "../../css/Login.css";
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
          "¡Bienvenido " + respuesta.nombre + "!",
          "Te logueaste correctamente!",
          "success"
        );
        reset();
        navegacion("/inicio");
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
      <div className="d-flex justify-content-center place-login mb-auto">
        <Container className="bg-dark-01 mb-4 rounded-4 shadow cont-login">
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
              variant="dark"
              type="submit"
              className="btn-fullWidth btn-outline-darkKhaki btn-outline-darkKhaki:hover btn-rounded shadow"
            >
              Acceder
            </Button>
            <div className="text-end">
              <Link as={Link} to={"/register"}>
                Crear cuenta
              </Link>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Login;
