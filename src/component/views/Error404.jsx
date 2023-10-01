import { Button } from "react-bootstrap";
import "../../css/error404.css";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="bg">
        <div className="containerError404">
          
          <h3 className="text-white text-center d-inline-flex bg-warning"> UPS! MENÚ NO ENCONTRADO! 😔</h3>
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2NsM2g2djJrcWV6MHIzZnQ5MGtkYjY0enBiNTNhaDBha2QxcWlhMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7522nOLccs9GVRqE/giphy.gif"
            className="moustache rounded-pill"
            alt="mostacho"
          />
          <Button variant="warning" className="mb-5" as={Link} to={"/"}>
            Volver al Inicio
          </Button>
        </div>
      </div>
    </>
  );
};

export default Error404;
