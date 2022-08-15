import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slid from "../../img/slid.jpg"
import Slid2 from "../../img/slid2.jpg"
import Slid3 from "../../img/slid3.jpg"

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="caru">
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
            className="img1"
            src={Slid}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="img1"
            src={Slid2}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="img1"
            src={Slid3}
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
    </div>
  );
}
