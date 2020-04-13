import React from "react";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

export default function Preview({ images }) {
  if (images.length === 0) {
    return <div>empty</div>;
  }

  return (
    <Carousel>
      {images.map(image => (
        <Carousel.Item>
          <Image src={image.src} alt={image.alt} thumbnail />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
