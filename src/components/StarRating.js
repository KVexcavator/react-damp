import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ style = {}, totalStars = 5 }) {
  const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
  );  
  const createArray = length => [...Array(length)];
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={{ border: "solid 5px", ...style }}>
      {createArray(totalStars).map((n, i) => (
        <Star 
          key={i} 
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)} 
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}

export default StarRating