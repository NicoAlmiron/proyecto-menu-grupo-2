import { useState } from "react";
import { Carousel } from "react-bootstrap";
import imgSlider1 from "/img-slider-main/img-slider-1.jpg";
import imgSlider2 from "/img-slider-main/img-slider-2.jpg";
import imgSlider3 from "/img-slider-main/img-slider-3.jpg";
import imgSlider4 from "/img-slider-main/img-slider-4.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="carousle-principal"
    >
      <Carousel.Item>
        <img
          src={imgSlider1}
          className="d-block w-100 img-slider"
          alt="imagen de muestra 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={imgSlider2}
          className="d-block w-100 img-slider"
          alt="imagen de muestra 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={imgSlider3}
          className="d-block w-100 img-slider"
          alt="imagen de muestra 3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={imgSlider4}
          className="d-block w-100 img-slider"
          alt="imagen de muestra 4"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
