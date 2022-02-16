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
import { IStarServer, IStar } from '../types/star';

function renderStars(params: ISkyViewParams) {
  for (let i = 0; i < params.stars.length; i += 1) {
    const { s_gamma, s_theta, v_gamma, v_theta } = transformIntoRadians(
      params.stars[i].coordinates,
      params.gamma,
      params.theta
    );
    drawStar(params, v_gamma, v_theta, s_gamma, s_theta, 2);
  }
}

function getStarsData(stars: IStarServer[]): IStar[] {
  // if ((stars === undefined) | (stars === null) | (stars.length === 0))
  //   return [];

  const starsData: IStar[] = [];

  stars.forEach((star) => {
    let right_ascension: number | string = star.right_ascension;
    let declination: number | string = star.declination;
    // RIGHT ASCENSION CONVERSION
    // Get right ascension parameters(hour, minutes, second)
    // from star field and convert them to float
    const rightAscensionFieldData: number[] | string[] = star.right_ascension
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
    declination =
      90 +
      declinationFieldData[0] +
      declinationFieldData[1] / 60 +
      declinationFieldData[2] / 3600;

    const parallax = parseFloat(star.parallax);
    const flux_v = parseFloat(star.flux_visible_light);

    const starData: IStar = {
      coordinates: [right_ascension, declination],
      parallax,
      flux_v
    };

    starsData.push(starData);
  });

  return starsData;
}

function drawStar(
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

  const color = '#ffffff';
  // actual drawing
  drawCircle(params, x_i, y_i, x_j, y_j, z_j, lr, ud, radius, color);
}

export { renderStars, getStarsData };
