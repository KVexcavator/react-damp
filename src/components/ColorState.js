import React, {useState} from "react";
import colorData from "../data/color-data.json";
import ColorList from "./ColorList.js";

function ColorState(){
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />;
}

export default ColorState