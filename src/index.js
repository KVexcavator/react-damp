import React from "react";
import { render } from "react-dom";
import Menu from "./components/Menu";
import data from "./data/recipes.json";
import StarRating from "./components/StarRating";
import ColorState from "./components/ColorState";

render([
  <ColorState />,
  <StarRating />,
  <Menu recipes={data} />
], document.getElementById("root"));