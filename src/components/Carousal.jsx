import React from "react";
import { Carousel } from "react-bootstrap";
import { carousalData } from "../static/data";

export default function Carousal() {
  return (
    <div>
      <Carousel style={{ height: 500 }}>
        {carousalData.map((item, key) => {
          return (
            <Carousel.Item>
              <img
                style={{ height: 500, objectFit: "fill" }}
                className="d-block w-100 h-500"
                src={item.image}
                alt={item.caption}
              />
              <Carousel.Caption>
                <h1>{item.caption}</h1>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
