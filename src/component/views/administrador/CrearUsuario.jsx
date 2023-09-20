import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { crearUsuario } from "../../helpers/queries";

const CrearUsuario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [imagen, setImagen] = useState("");

  const onSubmit = (user) => {
    crearUsuario(user)
      .then((resp) => {
        if (resp.status === 201) {
          Swal.fire(
            `Se creo el usuario ${user.nombre} Exitosamente!`,
            `se envio un correo al usuario registrado`,
            "success"
          );
        } else {
          Swal.fire(
            `El correo ingresado ${user.email}`,
            `ya se encuentra en uso actualemnte!`,
            "error"
          );
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Hubo un error",
          "Error al intentar crear el usuario",
          "error"
        );
      });
  };

  return (
    <Container>
      <h3 className="display-3 mt-4 mb-5 ms-4">
        Crea un Usuario <FontAwesomeIcon icon={faBowlFood} className="ms-2" />
      </h3>
      <div className="card mt-3 mb-5 shadow bg-card-crear-menu p-3">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6}>
              <FloatingLabel
                controlId="nombre"
                label="Nombre*"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Juan"
                  autoComplete="off"
                  autoFocus
                  minLength={1}
                  maxLength={51}
                  {...register("nombre", {
                    required: "El nombre del menu es un dato obligatorio",
                    minLength: {
                      value: 2,
                      message:
                        "El nombre debe contener por lo menos 2 caracteres",
                    },
                    maxLength: {
                      value: 49,
                      message: "Maximo 50 caracteres",
                    },
                  })}
                ></Form.Control>
                <Form.Text className="text-danger ps-2">
                  {errors.nombre?.message}
                </Form.Text>
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel controlId="email" label="Email*" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="juan@gmail.com"
                  autoComplete="off"
                  minLength={5}
                  maxLength={36}
                  {...register("email", {
                    required: "Este es un dato obligatorio",
                    minLength: {
                      value: 6,
                      message: "El correo debe contener al menos 6 caracteres",
                    },
                    maxLength: {
                      value: 35,
                      message: "El maximo de caracteres es de 35",
                    },
                  })}
                ></Form.Control>
                <Form.Text className="text-danger ps-2">
                  {errors.email?.message}
                </Form.Text>
              </FloatingLabel>
            </Col>
            <Col md={2} className="text-end">
              <Image
                src={
                  imagen
                    ? imagen
                    : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                }
                alt="imagen-del-juego"
                rounded
                className="img-crear-menu"
              ></Image>
            </Col>
            <Col md={6} className="pt-4">
              <FloatingLabel
                controlId="imagen"
                label="URL imagen del menu*"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  autoComplete="off"
                  placeholder="URL imagen del menu*"
                  {...register("imagen", {
                    required: "La Url de la imagen es obligatoria",
                    pattern: {
                      value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                      message: "La Url debe ser valida",
                    },
                  })}
                  onChange={(e) => {
                    setImagen(e.target.value);
                  }}
                ></Form.Control>
                <Form.Text className="text-danger ps-2">
                  {errors.imagen?.message}
                </Form.Text>
              </FloatingLabel>
            </Col>
            <Col md={4} className="pt-4">
              <FloatingLabel
                controlId="password"
                label="Contraseña*"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  autoComplete="off"
                  placeholder="*********"
                  minLength={7}
                  maxLength={17}
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    pattern: {
                      value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                      message:
                        "La contraseña debe contar entre 8 a 16 caracteres, una mayuscula y un numero",
                    },
                    minLength: {
                      value: 8,
                      message:
                        "La contraseña debe contar entre 8 a 16 caracteres, una mayuscula y un numero",
                    },
                    maxLength: {
                      value: 16,
                      message: "Maximo de 24 cacteres!",
                    },
                  })}
                ></Form.Control>
                <Form.Text className="text-danger ps-2">
                  {errors.password?.message}
                </Form.Text>
              </FloatingLabel>
            </Col>
          </Row>
          <div className="text-end">
            <Button variant="primary" type="submit">
              Crear Usuario
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default CrearUsuario;
