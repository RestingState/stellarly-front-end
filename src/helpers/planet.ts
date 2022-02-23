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
  IPlanetInfo,
  PlanetInfo
} from '../types/planet';

var planetsMapped: number[][];

function renderPlanets(params: ISkyViewParams) {
  planetsMapped = [];
  for (let i = 0; i < params.planets.length; i += 1) {
    const v_gamma = transformIntoRadians(params.gamma);
    const v_theta = transformIntoRadians(params.theta);
    const x_s = params.planets[i].coordinatesInSphere[0];
    const y_s = params.planets[i].coordinatesInSphere[1];
    const z_s = params.planets[i].coordinatesInSphere[2];
    let cords = drawPlanet(params, v_gamma, v_theta, x_s, y_s, z_s, 4, '#aa0000');
    if (cords !== undefined) planetsMapped.splice(i, 0, cords);
    else planetsMapped.splice(i, 0, [-1, -1]);
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

function getPlanetsInfo(planets: IPlanetServer[]): IPlanetInfo[] {
  const planetsInfo: IPlanetInfo[] = [];

  planets.forEach((planet) => {
    const planetInfo: PlanetInfo = {
      density: parseFloat(planet.information.density),
      id: planet.information.id,
      mass: parseFloat(planet.information.mass),
      mean_temperature: parseFloat(planet.information.mean_temperature),
      name: planet.information.name,
      radius: parseFloat(planet.information.radius),
      visual_mag: parseFloat(planet.information.visual_mag)
    };

    planetsInfo.push({ information: planetInfo });
  });
  return planetsInfo;
}

function getUnitedPlanetsData(
  planetsInfo: IPlanetInfo[],
  planetsCoordinatesInDecart: IPlanetCoordinatesInDecart[],
  planetsCoordinatesInSphere: IPlanetCoordinatesInSphere[]
): IPlanet[] {
  const unitedArr: IPlanet[] = [];
  for (let i = 0; i < planetsCoordinatesInDecart.length; i++) {
    unitedArr.push({
      ...planetsInfo[i],
      ...planetsCoordinatesInDecart[i],
      ...planetsCoordinatesInSphere[i]
    });
  }

  return unitedArr;
}

function getPlanetsData(data: IPlanetServer[]): IPlanet[] {
  const planetsInfo = getPlanetsInfo(data);
  const planetsCoordinatesInDecart = getPlanetsCoordinatesInDecart(data);
  const planetsCoordinatesInSphere = getPlanetsCoordinatesInSphere(
    planetsCoordinatesInDecart
  );
  const planetsData = getUnitedPlanetsData(
    planetsInfo,
    planetsCoordinatesInDecart,
    planetsCoordinatesInSphere
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
  radius: number,
  color: string
) {
  const { x: x_v, y: y_v, z: z_v } = getVectorInCartesian(gamma_v, theta_v); // view vector in cartesian

  if (!isVisible(x_v, y_v, z_v, x_s, y_s, z_s)) return;

  // projection on x-axis of the screen (sort of)
  const { x_i, y_i } = xAxisProjection(x_v, y_v, x_s, y_s);

  //projection on y-axis of the screen (sort of)
  const { x_j, y_j, z_j } = yAxisProjection(x_v, y_v, z_v, x_s, y_s, z_s);

  // check if should render in left or right side of the screen and up or down
  const { lr, ud } = determineScreenLocation(x_v, y_v, x_i, y_i, z_j);

  // actual drawing
  return drawCircle(params, x_i, y_i, x_j, y_j, z_j, lr, ud, radius, color);
}

export { renderPlanets, getPlanetsData, planetsMapped };
