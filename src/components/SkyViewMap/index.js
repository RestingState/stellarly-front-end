import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useAction";
// Styles
import { Map } from "./SkyViewMap.styles";
// Helper function
import { render_all } from "./helpers";

const SkyViewMap = (props) => {
  const { right_ascension, declination, zoom } = useSelector(
    (state) => state.map
  );
  const { setRightAscension, setDeclination } = useActions();

  const canvasRef = useRef(null);
  const paramsRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.setAttribute("height", window.innerHeight);
    canvas.setAttribute("width", document.documentElement.clientWidth);

    paramsRef.current = {
      context: canvas.getContext("2d"),
      is_moving: false,
      last_x: 0.0,
      last_y: 0.0,
      gamma: right_ascension,
      theta: declination,
      screen_width: canvas.width,
      screen_height: canvas.height,
      zoom_level: zoom,
      zoom_max: 5,
      zoom_min: 1,
      zoom_diff: 0.1,
      rotation_speed: 0.2,
      stars: [
        [165, 90 - 61.5],
        [165, 90 - 56.3],
        [180, 90 - 53.6],
        [183.75, 90 - 57],
        [193.5, 90 - 55.95],
        [199.5, 90 - 54.9],
        [207, 90 - 49.28],
        [40, 0.25],
      ],
    };

    const params = paramsRef.current;

    window.addEventListener("load", () => render_all(params));

    canvas.addEventListener("mousedown", (e) => {
      params.last_x = e.offsetX;
      params.last_y = e.offsetY;

      params.is_moving = true;
    });

    canvas.addEventListener("mousemove", (e) => {
      if (params.is_moving === true) {
        params.gamma +=
          ((params.last_x - e.offsetX) * params.rotation_speed) /
          params.zoom_level; // changing view angle
        params.theta +=
          ((e.offsetY - params.last_y) * params.rotation_speed) /
          params.zoom_level;
        if (params.gamma > 359) {
          params.gamma -= 359;
        } // here i check if angles are out of range,
        if (params.gamma < 0) {
          params.gamma += 359;
        } // and set their values accordingly.
        if (params.theta > 180) {
          params.theta = 180;
        } // might be a better way to do this
        if (params.theta <= 0) {
          params.theta = 0.01;
        }

        setRightAscension(params.gamma);
        setDeclination(params.theta);

        params.last_x = e.offsetX;
        params.last_y = e.offsetY;

        render_all(params);
      }
    });

    window.addEventListener("mouseup", (e) => {
      if (params.is_moving === true) {
        params.is_moving = false;
      }
    });
  }, []);

  useEffect(() => {
    const params = paramsRef.current;
    params.zoom_level = zoom;
    render_all(params);
  }, [zoom]);

  useEffect(() => {
    const params = paramsRef.current;
    params.gamma = right_ascension;
    render_all(params);
  }, [right_ascension]);

  useEffect(() => {
    const params = paramsRef.current;
    params.theta = declination;
    render_all(params);
  }, [declination]);

  return <Map ref={canvasRef} {...props} />;
};

export default SkyViewMap;
