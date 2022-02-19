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
import {
  IPlanetServer,
  IPlanet,
  IPlanetCoordinatesInDecart,
  IPlanetCoordinatesInSphere,
  IPlanetRadius
} from '../types/planet';

function renderPlanets(params: ISkyViewParams) {
  for (let i = 0; i < params.planets.length; i += 1) {
    const v_gamma = transformIntoRadians(params.gamma);
    const v_theta = transformIntoRadians(params.theta);
    const x_s = params.planets[i].coordinatesInSphere[0];
    const y_s = params.planets[i].coordinatesInSphere[1];
    const z_s = params.planets[i].coordinatesInSphere[2];
    drawPlanet(params, v_gamma, v_theta, x_s, y_s, z_s, 4);
  }
}

function getPlanetsCoordinatesInDecart(
  planets: IPlanetServer[]
): IPlanetCoordinatesInDecart[] {
  // if ((planets === undefined) | (planets === null) | (planets.length === 0))
  //   return [];

  const planetsCoordinates: IPlanetCoordinatesInDecart[] = [];

  planets.forEach((planet) => {
    let right_ascension: number | string = planet.coordinates.ra;
    let declination: number | string = planet.coordinates.dec;
    // RIGHT ASCENSION CONVERSION
    // Get right ascension parameters(hour, minutes, second)
    // from planet field and convert them to float
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
    // from planet field and convert them to float
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

    const coordinates: IPlanetCoordinatesInDecart = {
      coordinatesInDecart: [right_ascension, declination]
    };

    planetsCoordinates.push(coordinates);
  });

  return planetsCoordinates;
}

function getPlanetsCoordinatesInSphere(
  coordinatesInDecart: IPlanetCoordinatesInDecart[]
): IPlanetCoordinatesInSphere[] {
  const planetsCoordinatesInSphere: IPlanetCoordinatesInSphere[] = [];
  coordinatesInDecart.forEach((coordinate) => {
    const gamma = coordinate.coordinatesInDecart[0];
    const theta = coordinate.coordinatesInDecart[1];
    const { x, y, z } = getVectorInCartesian(gamma, theta);
    const coordinatesInSphere: IPlanetCoordinatesInSphere = {
      coordinatesInSphere: [x, y, z]
    };
    planetsCoordinatesInSphere.push(coordinatesInSphere);
  });
  return planetsCoordinatesInSphere;
}

function getPlanetsRadius(planets: IPlanetServer[]): IPlanetRadius[] {
  // if ((planets === undefined) | (planets === null) | (planets.length === 0))
  //   return [];

  const planetsRadius: IPlanetRadius[] = [];

  planets.forEach((planet) => {
    const radius = planet.information.radius;
    planetsRadius.push({ radius });
  });

  return planetsRadius;
}

function getUnitedPlanetsData(
  planetsCoordinatesInDecart: IPlanetCoordinatesInDecart[],
  planetsCoordinatesInSphere: IPlanetCoordinatesInSphere[],
  planetsRadius: IPlanetRadius[]
): IPlanet[] {
  if (planetsCoordinatesInDecart.length != planetsRadius.length)
    throw new Error('arrays should have equal length');

  const unitedArr: IPlanet[] = [];
  for (let i = 0; i < planetsCoordinatesInDecart.length; i++) {
    unitedArr.push({
      ...planetsCoordinatesInDecart[i],
      ...planetsCoordinatesInSphere[i],
      ...planetsRadius[i]
    });
  }

  return unitedArr;
}

function getPlanetsData(data: IPlanetServer[]): IPlanet[] {
  const planetsCoordinatesInDecart = getPlanetsCoordinatesInDecart(data);
  const planetsCoordinatesInSphere = getPlanetsCoordinatesInSphere(
    planetsCoordinatesInDecart
  );
  const planetsRadius = getPlanetsRadius(data);
  const planetsData = getUnitedPlanetsData(
    planetsCoordinatesInDecart,
    planetsCoordinatesInSphere,
    planetsRadius
  );
  return planetsData;
}

function drawPlanet(
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

  const color = '#aa0000';
  // actual drawing
  drawCircle(params, x_i, y_i, x_j, y_j, z_j, lr, ud, radius, color);
}

export { renderPlanets, getPlanetsData };
