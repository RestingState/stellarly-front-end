import React, { useEffect, useRef } from "react";
// Styles
import { Wrapper } from "./SkyView.styles";
import { draw } from "../../helpers";

const SkyView = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    draw(canvas, context);
  });

  return (
    <Wrapper>
      <canvas id="sky_view" ref={canvasRef}></canvas>
      <p id="cords-output">cords</p>
      <p id="debug"></p>
      Drag on the screen to turn, [+] [-] keys to zoom
    </Wrapper>
  );
};

export default SkyView;
