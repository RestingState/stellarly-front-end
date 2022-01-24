function transformIntoRadians(starsCoordinates, index, gamma, theta) {
  const s_gamma = (starsCoordinates[index][0] * Math.PI) / 180;
  const s_theta = (starsCoordinates[index][1] * Math.PI) / 180;
  const v_gamma = (gamma * Math.PI) / 180;
  const v_theta = (theta * Math.PI) / 180;
  return { s_gamma, s_theta, v_gamma, v_theta };
}

function getVectorInCartesian(gamma, theta) {
  const x = Math.sin(theta) * Math.cos(gamma); // view vector in cartesian
  const y = Math.sin(theta) * Math.sin(gamma);
  const z = Math.cos(theta);

  return { x, y, z };
}

function isVisible(x_v, y_v, z_v, x_s, y_s, z_s) {
  const dot_product =
    (x_v * x_s + y_v * y_s + z_v * z_s) /
    ((x_v ** 2 + y_v ** 2 + z_v ** 2) * (x_s ** 2 + y_s ** 2 + z_s ** 2)) **
      0.5;
  if (dot_product < 0) {
    return false;
  }
  return true;
}

function xAxisProjection(x_v, y_v, x_s, y_s) {
  const t_i = (-y_v * x_s + x_v * y_s) / (y_v ** 2 + x_v ** 2);
  const x_i = -y_v * t_i;
  const y_i = x_v * t_i;
  return { x_i, y_i };
}

function yAxisProjection(x_v, y_v, z_v, x_s, y_s, z_s) {
  const t_j =
    (-x_v * z_v * x_s + -y_v * z_v * y_s + (x_v ** 2 + y_v ** 2) * z_s) /
    ((-x_v * z_v) ** 2 + (-y_v * z_v) ** 2 + (x_v ** 2 + y_v ** 2) ** 2);
  const x_j = -x_v * z_v * t_j;
  const y_j = -y_v * z_v * t_j;
  const z_j = (x_v ** 2 + y_v ** 2) * t_j;

  return { x_j, y_j, z_j };
}

function determineScreenLocation(x_v, y_v, x_i, y_i, z_j) {
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

export {
  transformIntoRadians,
  getVectorInCartesian,
  isVisible,
  xAxisProjection,
  yAxisProjection,
  determineScreenLocation
};
