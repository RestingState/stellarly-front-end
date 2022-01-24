function blackout(params) {
  params.context.fillStyle = 'black';
  params.context.fillRect(0, 0, params.screen_width, params.screen_height);
}

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

function drawCircle(params, x_i, y_i, x_j, y_j, z_j, lr, ud, radius) {
  params.context.fillStyle = '#ffffff'; // should be changeable
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

function drawStar(params, gamma_v, theta_v, gamma_s, theta_s, radius) {
  const { x: x_v, y: y_v, z: z_v } = getVectorInCartesian(gamma_v, theta_v); // view vector in cartesian
  const { x: x_s, y: y_s, z: z_s } = getVectorInCartesian(gamma_s, theta_s); // star vector in cartesian

  if (!isVisible(x_v, y_v, z_v, x_s, y_s, z_s)) return;

  // projection on x-axis of the screen (sort of)
  const { x_i, y_i } = xAxisProjection(x_v, y_v, x_s, y_s);

  //projection on y-axis of the screen (sort of)
  const { x_j, y_j, z_j } = yAxisProjection(x_v, y_v, z_v, x_s, y_s, z_s);

  // check if should render in left or right side of the screen and up or down
  const { lr, ud } = determineScreenLocation(x_v, y_v, x_i, y_i, z_j);

  // actual drawing
  drawCircle(params, x_i, y_i, x_j, y_j, z_j, lr, ud, radius);
}

export function getStarsCoordinates(stars) {
  if ((stars === undefined) | (stars === null) | (stars.length === 0))
    return [];

  const starsCoordinates = [];

  stars.forEach((star) => {
    // RIGHT ASCENSION CONVERSION
    // Get right ascension parameters(hour, minutes, second)
    // from star field and convert them to float
    const rightAscensionFieldData = star.right_ascension
      .split(' ')
      .map((token) => parseFloat(token));

    // Check if right ascension minute and second parameters exists.
    // Otherwise set each of them to 0
    if (rightAscensionFieldData.length === 1) {
      rightAscensionFieldData.push(0, 0);
    } else if (rightAscensionFieldData.length === 2) {
      rightAscensionFieldData.push(0);
    }

    // Convert params to degree
    star.right_ascension =
      15 * rightAscensionFieldData[0] +
      0.25 * rightAscensionFieldData[1] +
      rightAscensionFieldData[2] / 240;

    // DECLINATION CONVERSION
    // Get declination parameters(degrees, minutes, seconds)
    // from star field and convert them to float
    const declinationFieldData = star.declination
      .split(' ')
      .map((token) => parseFloat(token));

    // Check if declination minute and second parameters exists.
    // Otherwise set each of them to 0
    if (declinationFieldData.length === 1) {
      declinationFieldData.push(0, 0);
    } else if (declinationFieldData.length === 2) {
      declinationFieldData.push(0);
    }

    // Define the right sign
    if (declinationFieldData[0] < 0) {
      declinationFieldData[1] *= -1;
      declinationFieldData[2] *= -1;
    }

    // Convert params to degree
    star.declination =
      90 +
      declinationFieldData[0] +
      declinationFieldData[1] / 60 +
      declinationFieldData[2] / 3600;

    starsCoordinates.push([star.right_ascension, star.declination]);
  });

  return starsCoordinates;
}

export function renderMap(params) {
  blackout(params);
  if (params.stars) {
    for (let i = 0; i < params.stars.length; i += 1) {
      const { s_gamma, s_theta, v_gamma, v_theta } = transformIntoRadians(
        params.stars,
        i,
        params.gamma,
        params.theta
      );
      drawStar(params, v_gamma, v_theta, s_gamma, s_theta, 2);
    }
  }
}
