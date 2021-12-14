import React from "react";
import ColorStarRating from "./ColorStarRating"

export default function Color({ title, color, rating }) {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
      <ColorStarRating selectedStars={rating} />
    </section>
  );
}