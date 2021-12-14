import React from "react";
import { FaStar } from "react-icons/fa";

function ColorStarRating({ totalStars = 5, selectedStars = 0 }) {
  const Star = ({ selected = false }) => (
    <FaStar color={selected ? "red" : "grey"} />
  );  
  const createArray = length => [...Array(length)];
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star 
          key={i} 
          selected={selectedStars > i}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

export default ColorStarRating