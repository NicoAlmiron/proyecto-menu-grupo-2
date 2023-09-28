import "../../css/Register.css";
import { Button, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registroUsuario } from "../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    document.title = "Registrarse";
  }, []);

  const navegacion = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (usuarioNUevo) => {
    (usuarioNUevo.estado = true),
      (usuarioNUevo.perfil = "user"),
      registroUsuario(usuarioNUevo)
        .then((resp) => {
          if (resp.status === 201) {
            Swal.fire(
              "¡Felicitaciones " + usuarioNUevo.nombre + "!",
              "Ya eres parte de nuestros clientes!",
              "success"
            );
            reset();
            navegacion("/login");
          } else {
            Swal.fire(
              "Oops!",
              "Hay algun error en los datos ingresados. Prueba nuevamente!",
              "error"
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
  };

  return (
    <>
      <div className="d-flex justify-content-center place-Register">
        <Container className="bg-dark-01 mb-4 rounded-4 shadow cont-Register">
          <h4 className="fw-bold title-page-Register">Cree una cuenta:</h4>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
            <FloatingLabel label="Nombre de usuario" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Juan Perez"
                {...register("nombre", {
                  required: "El nombre es un dato obligatorio",
                  pattern: {
                    value: /^(?:[a-zA-Z0-9]{2,16}\s*){1,}$/,
                    message: "El nombre debe tener entre 2 y 16 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombre?.message}
              </Form.Text>
            </FloatingLabel>

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
              Crear cuenta!
            </Button>
            <div className="text-end">
              <Link as={Link} to={"/login"}>
                Ir a Login
              </Link>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Register;
