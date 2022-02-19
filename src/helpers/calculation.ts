// Types
import { Gamma, Theta } from '../types/skyView';

function transformIntoRadians(coordinate: number) {
  const result: number = (coordinate * Math.PI) / 180;
  return result;
}

function getVectorInCartesian(gamma: Gamma, theta: Theta) {
  const x = Math.sin(theta) * Math.cos(gamma); // view vector in cartesian
  const y = Math.sin(theta) * Math.sin(gamma);
  const z = Math.cos(theta);

  return { x, y, z };
}

function isVisible(
  x_v: number,
  y_v: number,
  z_v: number,
  x_s: number,
  y_s: number,
  z_s: number
) {
  const dot_product =
    (x_v * x_s + y_v * y_s + z_v * z_s) /
    ((x_v ** 2 + y_v ** 2 + z_v ** 2) * (x_s ** 2 + y_s ** 2 + z_s ** 2)) **
      0.5;
  if (dot_product < 0) {
    return false;
  }
  return true;
}

function xAxisProjection(x_v: number, y_v: number, x_s: number, y_s: number) {
  const t_i = (-y_v * x_s + x_v * y_s) / (y_v ** 2 + x_v ** 2);
  const x_i = -y_v * t_i;
  const y_i = x_v * t_i;
  return { x_i, y_i };
}

function yAxisProjection(
  x_v: number,
  y_v: number,
  z_v: number,
  x_s: number,
  y_s: number,
  z_s: number
) {
  const t_j =
    (-x_v * z_v * x_s + -y_v * z_v * y_s + (x_v ** 2 + y_v ** 2) * z_s) /
    ((-x_v * z_v) ** 2 + (-y_v * z_v) ** 2 + (x_v ** 2 + y_v ** 2) ** 2);
  const x_j = -x_v * z_v * t_j;
  const y_j = -y_v * z_v * t_j;
  const z_j = (x_v ** 2 + y_v ** 2) * t_j;

  return { x_j, y_j, z_j };
}

function determineScreenLocation(
  x_v: number,
  y_v: number,
  x_i: number,
  y_i: number,
  z_j: number
) {
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

  return { lr, ud };
}

function getDistance(x1: number, x2: number, y1: number, y2: number) {
  return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;
}

export {
  transformIntoRadians,
  getVectorInCartesian,
  isVisible,
  xAxisProjection,
  yAxisProjection,
  determineScreenLocation,
  getDistance
};
