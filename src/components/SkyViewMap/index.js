import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useAction";
// Styles
import { Map } from "./SkyViewMap.styles";

const SkyViewMap = (props) => {
  const { right_ascension, declination, zoom } = useSelector(
    (state) => state.map
  );
  const { setRightAscension, setDeclination } = useActions();

  const canvasRef = useRef(null);
  const paramsRef = useRef();

  // paints screen black
  function blackout() {
    const params = paramsRef.current;
    params.context.fillStyle = "black";
    params.context.fillRect(0, 0, params.screen_width, params.screen_height);
  }

  function drawStar(gamma_v, theta_v, gamma_s, theta_s, radius) {
    const params = paramsRef.current;
    let x_v = Math.sin(theta_v) * Math.cos(gamma_v); // view vector in cartesian
    let y_v = Math.sin(theta_v) * Math.sin(gamma_v);
    let z_v = Math.cos(theta_v);

    let x_s = Math.sin(theta_s) * Math.cos(gamma_s); // star vector in cartesian
    let y_s = Math.sin(theta_s) * Math.sin(gamma_s);
    let z_s = Math.cos(theta_s);

    // check if visible
    let dot_product =
      (x_v * x_s + y_v * y_s + z_v * z_s) /
      ((x_v ** 2 + y_v ** 2 + z_v ** 2) * (x_s ** 2 + y_s ** 2 + z_s ** 2)) **
        0.5;
    if (dot_product < 0) {
      return;
    }

    let t_i = (-y_v * x_s + x_v * y_s) / (y_v ** 2 + x_v ** 2);
    let t_j =
      (-x_v * z_v * x_s + -y_v * z_v * y_s + (x_v ** 2 + y_v ** 2) * z_s) /
      ((-x_v * z_v) ** 2 + (-y_v * z_v) ** 2 + (x_v ** 2 + y_v ** 2) ** 2);

    // projection on x-axis of the screen (sort of)
    let x_i = -y_v * t_i;
    let y_i = x_v * t_i;

    //projection on y-axis of the screen (sort of)
    let x_j = -x_v * z_v * t_j;
    let y_j = -y_v * z_v * t_j;
    let z_j = (x_v ** 2 + y_v ** 2) * t_j;

    let lr = 1; // check if should render in left or right side of the screen
    let ud = 1; // same as above, but up-down

    if (x_v * y_v > 0) {
      if (x_v > 0) {
        lr = Math.sign(x_i);
      } else {
        lr = Math.sign(y_i);
      }
    }
    if (x_v * y_v < 0) {
      if (x_v > 0) {
        lr = -Math.sign(x_i);
      } else {
        lr = Math.sign(x_i);
      }
    }

    if (z_j > 0) {
      ud = -1;
    }

    // actual drawing
    params.context.fillStyle = "#ffffff"; // should be changeable
    params.context.beginPath();
    params.context.arc(
      (((x_i ** 2 + y_i ** 2) ** 0.5 * params.screen_width) / 2) *
        params.zoom_level *
        lr +
        params.screen_width / 2,
      ((x_j ** 2 + y_j ** 2 + z_j ** 2) ** 0.5 *
        params.zoom_level *
        ud *
        params.screen_width) /
        2 +
        params.screen_height / 2,
      radius,
      0,
      2 * Math.PI
    );
    params.context.fill();
  }

  function render_all() {
    const params = paramsRef.current;
    blackout();
    for (let i = 0; i < params.stars.length; i += 1) {
      let s_gamma = (params.stars[i][0] * Math.PI) / 180;
      let s_theta = (params.stars[i][1] * Math.PI) / 180;
      let v_gamma = (params.gamma * Math.PI) / 180;
      let v_theta = (params.theta * Math.PI) / 180;

      drawStar(v_gamma, v_theta, s_gamma, s_theta, 2);
    }
  }

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

    window.addEventListener("load", render_all);

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

        params.last_x = e.offsetX;
        params.last_y = e.offsetY;

        render_all();
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
    render_all();
  }, [zoom]);

  return <Map ref={canvasRef} {...props} />;
};

export default SkyViewMap;
