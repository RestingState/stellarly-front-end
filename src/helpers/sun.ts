import { drawCircle } from './drawing';
import {
  transformIntoRadians,
  getVectorInCartesian,
  isVisible,
  xAxisProjection,
  yAxisProjection,
  determineScreenLocation
} from './calculation';
// Types
import { ISkyViewParams } from '../types/skyView';
import { ISunServer, ISun, ISunCoordinates, ISunRadius } from '../types/sun';

function renderSun(params: ISkyViewParams) {
  const { s_gamma, s_theta, v_gamma, v_theta } = transformIntoRadians(
    params.sun.coordinates,
    params.gamma,
    params.theta
  );
  drawSun(params, v_gamma, v_theta, s_gamma, s_theta, 10);
}

function getSunCoordinates(sun: ISunServer): ISunCoordinates {
  // if (!sun) return {};

  let right_ascension: string | number = sun.coordinates.ra;
  let declination: string | number = sun.coordinates.dec;
  // RIGHT ASCENSION CONVERSION
  // Get right ascension parameters(hour, minutes, second)
  // from sun field and convert them to float
  const rightAscensionFieldData: number[] | string[] = right_ascension
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
  // from sun field and convert them to float
  const declinationFieldData: number[] | string[] = declination
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

  const sunCoordinates: ISunCoordinates = {
    coordinates: [right_ascension, declination]
  };

  return sunCoordinates;
}

function getSunRadius(sun: ISunServer): ISunRadius {
  // if (!sun) return {};

  const sunRadius: ISunRadius = { radius: sun.information.visual_mag };
  return sunRadius;
}

function getSunData(data: ISunServer): ISun {
  const sunCoordinates = getSunCoordinates(data);
  const sunRadius = getSunRadius(data);
  const sunData: ISun = { ...sunCoordinates, ...sunRadius };
  return sunData;
}

function drawSun(
  params: ISkyViewParams,
  gamma_v: number,
  theta_v: number,
  gamma_s: number,
  theta_s: number,
  radius: number
) {
  const { x: x_v, y: y_v, z: z_v } = getVectorInCartesian(gamma_v, theta_v); // view vector in cartesian
  const { x: x_s, y: y_s, z: z_s } = getVectorInCartesian(gamma_s, theta_s); // star vector in cartesian

  if (!isVisible(x_v, y_v, z_v, x_s, y_s, z_s)) return;

  // projection on x-axis of the screen (sort of)
  const { x_i, y_i } = xAxisProjection(x_v, y_v, x_s, y_s);

  //projection on y-axis of the screen (sort of)
  const { x_j, y_j, z_j } = yAxisProjection(x_v, y_v, z_v, x_s, y_s, z_s);

  // check if should render in left or right side of the screen and up or down
  const { lr, ud } = determineScreenLocation(x_v, y_v, x_i, y_i, z_j);

  const color = '#ff9d00';
  // actual drawing
  drawCircle(params, x_i, y_i, x_j, y_j, z_j, lr, ud, radius, color);
}

export { renderSun, getSunData };
