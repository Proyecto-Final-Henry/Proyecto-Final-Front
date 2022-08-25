import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carrousel1 from "../../assets/carrousel1.png"
import carrousel2 from "../../assets/carrousel2.png"
import carrousel3 from "../../assets/carrousel3.png"

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="caru">
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="container">
            <h4 className='containerText'>Busca todas tus canciones favoritas en un solo lugar</h4>
            <img
            className="img1"
            src={carrousel1}
            alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="container">
            <h4 className='containerText'>Explora decenas de generos</h4>
            <img
            className="img1"
            src={carrousel2}
            alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="container">
            <h4 className='containerText'>Descubre nuevos artistas todos los dias</h4>
            <img
            className="img1"
            src={carrousel3}
            alt="Third slide"
            />
          </div>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}
