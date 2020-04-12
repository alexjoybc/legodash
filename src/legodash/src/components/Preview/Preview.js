import React from "react";

export default function Preview({ image: { src, alt } }) {
  return (
    <img src={src} alt={alt} class="img-thumbnail" />
  );
}
