import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor }) {
  console.log(onChangeColor);
  return (
    {/*<div className="child" style={{ backgroundColor: "#FFF" }} />;}*/}
    <div
          onClick={onChangeColor}
          className="child"
          style={{ backgroundColor: "#FFF" }}
        />
    </div>
  );
};

export default Child;
