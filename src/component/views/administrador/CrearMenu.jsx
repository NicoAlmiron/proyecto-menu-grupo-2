import React, { useEffect, useState } from "react";
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
import { crearMenu } from "../../helpers/queries";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

const CrearMenu = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    document.title = "Administracion | Crear Menu";
  }, []);

  const onSubmit = (menu) => {
    crearMenu(menu)
      .then((resp) => {
        if (resp.status === 201) {
          Swal.fire(
            "El menu fue cargado con exito!",
            `Ya puedes ver el menu ${menu.nombreMenu}`,
            "success"
          );
          reset();
          setImagen("");
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Algo a pasado!",
          `Ocurrio un error: ${error.message}`,
          "error"
        );
      });
  };

  return (
    <div className="bg-pagina-crearMenu">
      <Container>
        <h3 className="display-5 mt-4 mb-5 titulo-crear-menu rounded text-center py-3">
          Crea un menu <FontAwesomeIcon icon={faBowlFood} className="ms-2" />
        </h3>
        <div className="card mt-3 mb-5 shadow bg-card-crear-menu pt-2">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-4 p-3 pb-0">
              <div className="col-md-6">
                <FloatingLabel
                  controlId="nombreMenu"
                  label="Nombre del menu*"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Hamburguesa"
                    autoComplete="off"
                    autoFocus
                    minLength={1}
                    maxLength={51}
                    {...register("nombreMenu", {
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
                    {errors.nombreMenu?.message}
                  </Form.Text>
                </FloatingLabel>
              </div>
              <div className="col-md-6">
                <FloatingLabel
                  controlId="categoria"
                  label="Categoria del Menu*"
                >
                  <Form.Select
                    aria-label="Categorai del juego*"
                    {...register("categoria", {
                      required: "Este campo es obligatorio",
                    })}
                  >
                    <option value="">Elige una categoria</option>
                    <option value="Desayunos">Desayunos</option>
                    <option value="Entradas">Entradas</option>
                    <option value="Platos Principales">
                      Platos Principales
                    </option>
                    <option value="Acompañamientos">Acompañamientos</option>
                    <option value="Postres">Postres</option>
                    <option value="Bebidas">Bebidas</option>
                    <option value="Comida Rapida">Comida Rapida</option>
                    <option value="Comidas Etnicas">Comidas Etnicas</option>
                    <option value="Comidas Saludables">
                      Comidas Saludables
                    </option>
                  </Form.Select>
                  <Form.Text className="text-danger ps-2">
                    {errors.categoria?.message}
                  </Form.Text>
                </FloatingLabel>
              </div>
            </div>
            <Row className="px-4">
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
              <Col md={10} className="pt-4">
                <div className="row g-4">
                  <div className="col-md-8">
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
                  </div>
                  <div className="col-md-4">
                    <FloatingLabel
                      controlId="precio"
                      label="Precio*"
                      className="mb-3"
                    >
                      <Form.Control
                        type="number"
                        autoComplete="off"
                        placeholder="precio"
                        {...register("precio", {
                          required: "El precio es un dato obligatorio",
                          min: {
                            value: 100,
                            message: "El precio minimo es de $100",
                          },
                          max: {
                            value: 100000,
                            message: "El precio maximo es de $100.000",
                          },
                        })}
                      ></Form.Control>
                      <Form.Text className="text-danger ps-2">
                        {errors.precio?.message}
                      </Form.Text>
                    </FloatingLabel>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="px-3">
              <FloatingLabel
                controlId="detalle"
                label="Detalles del menu*"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Detalles del menu*"
                  autoComplete="off"
                  className=""
                  {...register("detalle", {
                    required: "Este campo es obligatorio",
                    maxLength: {
                      value: 600,
                      message: "limite de 600 caracteres",
                    },
                  })}
                ></Form.Control>
                <Form.Text className="text-danger ps-2">
                  {errors.detalle?.message}
                </Form.Text>
              </FloatingLabel>
            </div>
            <div className="text-end mb-4 me-5">
              <Button variant="warning" type="submit">
                Crear Menu +
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default CrearMenu;
