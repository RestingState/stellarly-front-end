import React, { useEffect, useRef } from "react";
// Styles
import { Map } from "./SkyViewMap.styles";
import { draw } from "../../helpers";

const SkyViewMap = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    draw(canvas, context);
  });

  return <Map id="sky_view" ref={canvasRef}></Map>;
};

export default SkyViewMap;
