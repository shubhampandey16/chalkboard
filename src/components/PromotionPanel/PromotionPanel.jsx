import React, { useState } from "react";
import food_img from "./food_img.jpg";
import { Carousel } from "react-bootstrap";

function PromotionPanel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={food_img}
            alt="First slide"
            height="300"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Add for company 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={food_img}
            alt="Second slide"
            height="300"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Add for company 2</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={food_img}
            alt="Third slide"
            height="300"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Add for company 3</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PromotionPanel;
