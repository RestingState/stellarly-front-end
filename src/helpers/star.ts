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

var starsMapped: number[][];

function renderStars(params: ISkyViewParams) {
  starsMapped = [];
  for (let i = 0; i < params.stars.length; i += 1) {
    const v_gamma = transformIntoRadians(params.gamma);
    const v_theta = transformIntoRadians(params.theta);
    const x_s = params.stars[i].coordinatesInSphere[0];
    const y_s = params.stars[i].coordinatesInSphere[1];
    const z_s = params.stars[i].coordinatesInSphere[2];
    let cords = drawStar(params, v_gamma, v_theta, x_s, y_s, z_s, params.stars[i].flux_v / 10 * params.zoom_level ** 0.2 - 0.1);
    if (cords !== undefined) starsMapped.splice(i, 0, cords);
    else starsMapped.splice(i, 0, [-1, -1]);
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

    const id = star.id;
    const name = star.name;
    const spectral_type = star.spectral_type;
    const parallax = parseFloat(star.parallax);
    const flux_v = parseFloat(star.flux_visible_light);
    const s_gamma = transformIntoRadians(right_ascension);
    const s_theta = transformIntoRadians(declination);
    const { x, y, z } = getVectorInCartesian(s_gamma, s_theta);

    const starData: IStar = {
      id,
      name,
      spectral_type,
      coordinatesInDecart: [right_ascension, declination],
      coordinatesInSphere: [x, y, z],
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
  x_s: number,
  y_s: number,
  z_s: number,
  radius: number
) {
  const { x: x_v, y: y_v, z: z_v } = getVectorInCartesian(gamma_v, theta_v); // view vector in cartesian

  if (!isVisible(x_v, y_v, z_v, x_s, y_s, z_s)) return;

  // projection on x-axis of the screen (sort of)
  const { x_i, y_i } = xAxisProjection(x_v, y_v, x_s, y_s);

  //projection on y-axis of the screen (sort of)
  const { x_j, y_j, z_j } = yAxisProjection(x_v, y_v, z_v, x_s, y_s, z_s);

  // check if should render in left or right side of the screen and up or down
  const { lr, ud } = determineScreenLocation(x_v, y_v, x_i, y_i, z_j);

  const color = '#ffffff';
  // actual drawing

  return drawCircle(params, x_i, y_i, x_j, y_j, z_j, lr, ud, radius, color);

}

var normal_s_types = ['A', 'B', 'O', 'F', 'G', 'K', 'M'];

var types = {
  'undefined': {'mass': 0, 'radius': 0, 'luminosity':	0, 'temperature':	0},
  'A0': {'mass': 2.18, 'radius': 2.193, 'luminosity':	38.02, 'temperature':	9700},
  'A1': {'mass': 2.05, 'radius': 2.136, 'luminosity':	30.90, 'temperature': 9300},
  'A2': {'mass': 1.98, 'radius': 2.117, 'luminosity':	23.99, 'temperature': 8800},
  'A3': {'mass': 1.86, 'radius': 1.861, 'luminosity':	16.98, 'temperature':	8600},
  'A4': {'mass': 1.93, 'radius': 1.794, 'luminosity':	13.49, 'temperature':	8250},
  'A5': {'mass': 1.88, 'radius': 1.785, 'luminosity':	12.30, 'temperature': 8100},
  'A6': {'mass': 1.83, 'radius': 1.775,  'luminosity': 11.22, 'temperature': 7910},
  'A7': {'mass': 1.77, 'radius': 1.750, 'luminosity':	10.00, 'temperature':	7760},
  'A8': {'mass': 1.81, 'radius': 1.747, 'luminosity':	9.12, 'temperature': 7590},
  'A9': {'mass': 1.75, 'radius': 1.747, 'luminosity':	8.32, 'temperature': 7400 },
  'B0': {'mass': 17.7, 'radius': 7.16, 'luminosity': 44668, 'temperature': 31400},
  'B1': {'mass': 11, 'radius': 5.71, 'luminosity': 13490, 'temperature': 26000},
  'B2': {'mass': 7.30, 'radius': 4.06, 'luminosity': 2692, 'temperature': 20600},
  'B3': {'mass': 5.40, 'radius': 3.61, 'luminosity': 977, 'temperature': 17000},
  'B4': {'mass': 5.10, 'radius': 3.46, 'luminosity': 776, 'temperature': 16400},
  'B5': {'mass': 4.70, 'radius': 3.36, 'luminosity': 589, 'temperature': 15700},
  'B6': {'mass': 4.30, 'radius': 3.27, 'luminosity': 372, 'temperature': 14500},
  'B7': {'mass': 3.92,'radius': 2.94, 'luminosity': 302, 'temperature': 14000},
  'B8': {'mass': 3.38, 'radius': 2.86, 'luminosity': 155, 'temperature': 12300},
  'B9': {'mass': 2.75, 'radius': 2.49, 'luminosity': 72, 'temperature': 10700},
  'F0': {'mass': 1.61, 'radius':	1.728, 'luminosity':	7.24, 'temperature':	7220},
  'F1': {'mass': 1.50, 'radius':	1.679, 'luminosity':	6.17, 'temperature':	7020},
  'F2': {'mass': 1.46, 'radius':	1.622, 'luminosity':	5.13, 'temperature':	6820},
  'F3': {'mass': 1.44, 'radius':	1.578, 'luminosity':	4.68, 'temperature':	6750},
  'F4': {'mass': 1.38, 'radius':	1.533, 'luminosity':	4.17, 'temperature':	6670},
  'F5': {'mass': 1.33, 'radius':	1.473, 'luminosity':	3.63, 'temperature':	6550},
  'F6': {'mass': 1.25, 'radius':	1.359, 'luminosity':	2.69, 'temperature':	6350},
  'F7': {'mass': 1.21, 'radius':	1.324, 'luminosity': 	2.45, 'temperature':	6280},
  'F8': {'mass': 1.18, 'radius': 	1.221, 'luminosity': 	1.95, 'temperature':	6180},
  'F9': {'mass': 1.13, 'radius':	1.167, 'luminosity':	1.66, 'temperature':	6050},
  'G0': {'mass': 1.06, 'radius':	1.100, 'luminosity':	1.35, 'temperature':	5930},
  'G1': {'mass': 1.03, 'radius':	1.060, 'luminosity':	1.20, 'temperature':	5860},
  'G2': {'mass': 1.00, 'radius':	1.012, 'luminosity':	1.02, 'temperature':	5770},
  'G3': {'mass': 0.99, 'radius':	1.002, 'luminosity':	0.98, 'temperature':	5720},
  'G4': {'mass': 0.985, 'radius':	0.991, 'luminosity':	0.91, 'temperature':	5680},
  'G5': {'mass': 0.98, 'radius':	0.977, 'luminosity':	0.89, 'temperature':	5660},
  'G6': {'mass': 0.97, 'radius':	0.949, 'luminosity':	0.79, 'temperature':	5600},
  'G7': {'mass': 0.95, 'radius':	0.927, 'luminosity':	0.74, 'temperature':	5550},
  'G8': {'mass': 0.94, 'radius':	0.914, 'luminosity':	0.68, 'temperature':	5480},
  'G9': {'mass': 0.90, 'radius':	0.853, 'luminosity':	0.55, 'temperature':	5380},
  'K0': {'mass': 0.88, 'radius':	0.813, 'luminosity':	0.46, 'temperature':	5270},
  'K1': {'mass': 0.86, 'radius':	0.797, 'luminosity':	0.41, 'temperature':	5170},
  'K2': {'mass': 0.82, 'radius':	0.783, 'luminosity':	0.37, 'temperature':	5100},
  'K3': {'mass': 0.78, 'radius':	0.755, 'luminosity':	0.28, 'temperature':	4830},
  'K4': {'mass': 0.73, 'radius':	0.713, 'luminosity':	0.20, 'temperature':	4600},
  'K5': {'mass': 0.70, 'radius':	0.701, 'luminosity':	0.17, 'temperature':	4440},
  'K6': {'mass': 0.69, 'radius':	0.669, 'luminosity':	0.14, 'temperature':	4300},
  'K7': {'mass': 0.64, 'radius':	0.630, 'luminosity':	0.10, 'temperature':	4100},
  'K8': {'mass': 0.62, 'radius':	0.615, 'luminosity':	0.087, 'temperature':	3990},
  'K9': {'mass': 0.59, 'radius':	0.608, 'luminosity':	0.079, 'temperature':	3930},

  //  'A0': {'mass': 'radius': 'luminosity': 'temperature': },
};

var types_map = new Map(Object.entries(types));

var simpler_type;
function translateSpectralType(s_type: string){
  simpler_type = null;

  if (normal_s_types.includes(s_type[0])){
    if (parseInt(s_type[1])) simpler_type = s_type[0] + s_type[1];
    else if (s_type[1] === '(' && parseInt(s_type[2])) simpler_type = s_type[0] + s_type[2];
  }
  if (simpler_type) return types_map.get(simpler_type);
  else return types_map.get('undefined');
} 

export { renderStars, getStarsData, starsMapped, translateSpectralType};
