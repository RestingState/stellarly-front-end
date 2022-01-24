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

function drawStar(params, gamma_v, theta_v, gamma_s, theta_s, radius) {
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
