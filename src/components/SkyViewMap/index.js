import React, { useRef, useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useAction";
// Styles
import { Map } from "./SkyViewMap.styles";

const SkyViewMap = (props) => {
  const { right_ascension, declination, zoom } = useSelector(
    (state) => state.map
  );
  const { setRightAscension, setDeclination, setZoom } = useActions();

  const canvasRef = useRef(null);
  const propertiesRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.setAttribute("height", window.innerHeight);
    canvas.setAttribute("width", document.documentElement.clientWidth);

    propertiesRef.current = {
      context: canvas.getContext("2d"),
      is_moving: false,
      last_x: 0.0,
      last_y: 0.0,
      gamma: 90.0,
      theta: 90.0,
      screen_width: canvas.width,
      screen_height: canvas.height,
      zoom_level: 1,
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

    window.addEventListener("load", render_all);

    canvas.addEventListener("mousedown", (e) => {
      propertiesRef.current.last_x = e.offsetX;
      propertiesRef.current.last_y = e.offsetY;

      propertiesRef.current.is_moving = true;
    });

    canvas.addEventListener("mousemove", (e) => {
      if (propertiesRef.current.is_moving === true) {
        propertiesRef.current.gamma +=
          ((propertiesRef.current.last_x - e.offsetX) *
            propertiesRef.current.rotation_speed) /
          propertiesRef.current.zoom_level; // changing view angle
        propertiesRef.current.theta +=
          ((e.offsetY - propertiesRef.current.last_y) *
            propertiesRef.current.rotation_speed) /
          propertiesRef.current.zoom_level;

        if (propertiesRef.current.gamma > 359) {
          propertiesRef.current.gamma -= 359;
        } // here i check if angles are out of range,
        if (propertiesRef.current.gamma < 0) {
          propertiesRef.current.gamma += 359;
        } // and set their values accordingly.
        if (propertiesRef.current.theta > 180) {
          propertiesRef.current.theta = 180;
        } // might be a better way to do this
        if (propertiesRef.current.theta <= 0) {
          propertiesRef.current.theta = 0.01;
        }

        propertiesRef.current.last_x = e.offsetX;
        propertiesRef.current.last_y = e.offsetY;

        render_all();

        // document.getElementById("cords-output").innerHTML = gamma + " " + theta; // this is to be removed
      }
    });

    window.addEventListener("mouseup", (e) => {
      if (propertiesRef.current.is_moving === true) {
        // document.getElementById("cords-output").innerHTML = gamma + " " + theta; // for debugging
        propertiesRef.current.is_moving = false;
      }
    });

    // window.addEventListener("keydown", check, false); // general key-listener
    // function check(e) {
    //   let code = e.keyCode;

    //   // zoom in on [+]
    //   if (code == 187) {
    //     zoom_level += zoom_diff;
    //     if (zoom_level > zoom_max) {
    //       zoom_level = zoom_max;
    //     }
    //     render_all();
    //   }

    //   // zoom out on [-]
    //   if (code == 189) {
    //     zoom_level -= zoom_diff;
    //     if (zoom_level < zoom_min) {
    //       zoom_level = zoom_min;
    //     }
    //     render_all();
    //   }
    // }

    //? stuff below could be simplified, using trigonometry too
    // for now it's a mess.

    function drawStar(gamma_v, theta_v, gamma_s, theta_s, radius) {
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

      // do not try to understand this.
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
      propertiesRef.current.context.fillStyle = "#ffffff"; // should be changeable
      propertiesRef.current.context.beginPath();
      propertiesRef.current.context.arc(
        (((x_i ** 2 + y_i ** 2) ** 0.5 * propertiesRef.current.screen_width) /
          2) *
          propertiesRef.current.zoom_level *
          lr +
          propertiesRef.current.screen_width / 2,
        ((x_j ** 2 + y_j ** 2 + z_j ** 2) ** 0.5 *
          propertiesRef.current.zoom_level *
          ud *
          propertiesRef.current.screen_width) /
          2 +
          propertiesRef.current.screen_height / 2,
        radius,
        0,
        2 * Math.PI
      );
      propertiesRef.current.context.fill();
    }

    function render_all() {
      blackout();
      for (let i = 0; i < propertiesRef.current.stars.length; i += 1) {
        let in_x = false;
        let s_gamma = (propertiesRef.current.stars[i][0] * Math.PI) / 180;
        let s_theta = (propertiesRef.current.stars[i][1] * Math.PI) / 180;
        let v_gamma = (propertiesRef.current.gamma * Math.PI) / 180;
        let v_theta = (propertiesRef.current.theta * Math.PI) / 180;

        drawStar(v_gamma, v_theta, s_gamma, s_theta, 2);
      }
    }

    // paints screen black
    function blackout() {
      propertiesRef.current.context.fillStyle = "black";
      propertiesRef.current.context.fillRect(
        0,
        0,
        propertiesRef.current.screen_width,
        propertiesRef.current.screen_height
      );
    }
  }, []);

  return <Map ref={canvasRef} {...props} />;
};

export default SkyViewMap;
