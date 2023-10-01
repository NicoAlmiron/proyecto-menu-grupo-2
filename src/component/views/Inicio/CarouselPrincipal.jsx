import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className='carousle-principal'
    >
      <Carousel.Item className='h-100'>
        <img
          src='/img-slider-main/img-slider-1.jpg'
          className='d-block w-100 img-slider'
          alt='imagen de muestra 1'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src='/img-slider-main/img-slider-2.jpg'
          className='d-block w-100 img-slider'
          alt='imagen de muestra 2'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src='/img-slider-main/img-slider-3.jpg'
          className='d-block w-100 img-slider'
          alt='imagen de muestra 3'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src='/img-slider-main/img-slider-4.jpg'
          className='d-block w-100 img-slider'
          alt='imagen de muestra 4'
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;