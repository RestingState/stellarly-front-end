import { drawCircle } from './drawing';
import {
  transformIntoRadians,
  getVectorInCartesian,
  isVisible,
  xAxisProjection,
  yAxisProjection,
  determineScreenLocation,
  getUnitedData
} from './calculation';

function renderPlanets(params) {
  for (let i = 0; i < params.planets.length; i += 1) {
    const { s_gamma, s_theta, v_gamma, v_theta } = transformIntoRadians(
      params.planets[i].coordinates,
      params.gamma,
      params.theta
    );
    drawPlanet(params, v_gamma, v_theta, s_gamma, s_theta, 2);
  }
}

function getPlanetsCoordinates(planets) {
  if ((planets === undefined) | (planets === null) | (planets.length === 0))
    return [];

  const planetsCoordinates = [];

  planets.forEach((planet) => {
    let right_ascension = planet.coordinates.ra;
    let declination = planet.coordinates.dec;
    // RIGHT ASCENSION CONVERSION
    // Get right ascension parameters(hour, minutes, second)
    // from planet field and convert them to float
    const rightAscensionFieldData = right_ascension
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
    right_ascension =
      15 * rightAscensionFieldData[0] +
      0.25 * rightAscensionFieldData[1] +
      rightAscensionFieldData[2] / 240;

    // DECLINATION CONVERSION
    // Get declination parameters(degrees, minutes, seconds)
    // from planet field and convert them to float
    const declinationFieldData = declination
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
    declination =
      90 +
      declinationFieldData[0] +
      declinationFieldData[1] / 60 +
      declinationFieldData[2] / 3600;

    planetsCoordinates.push({ coordinates: [right_ascension, declination] });
  });

  return planetsCoordinates;
}

function getPlanetsRadius(planets) {
  if ((planets === undefined) | (planets === null) | (planets.length === 0))
    return [];

  const planetsRadius = [];

  planets.forEach((planet) => {
    const radius = planet.information.radius;
    planetsRadius.push({ radius: radius });
  });

  return planetsRadius;
}

function getPlanetsData(data) {
  const planetsCoordinates = getPlanetsCoordinates(data);
  const planetsRadius = getPlanetsRadius(data);
  const planetsData = getUnitedData(planetsCoordinates, planetsRadius);
  return planetsData;
}

function drawPlanet(params, gamma_v, theta_v, gamma_s, theta_s, radius) {
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

export { renderPlanets, getPlanetsData };
