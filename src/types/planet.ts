interface IPlanetCoordinatesServer {
  date: string;
  dec: string;
  id: number;
  planet_id: number;
  ra: string;
}

interface IPlanetInformationServer {
  density: string;
  id: number;
  mass: string;
  mean_temperature: string;
  name: string;
  radius: string;
  visual_mag: string;
}

export interface IPlanetServer {
  coordinates: IPlanetCoordinatesServer;
  information: IPlanetInformationServer;
  name: string;
}

export type PlanetCoordinatesInDecart = [
  right_ascension: number,
  declination: number
];
export type PlanetCoordinatesInSphere = [x: number, y: number, z: number];
export type PlanetRadius = string;

export interface IPlanetCoordinatesInDecart {
  coordinatesInDecart: PlanetCoordinatesInDecart;
}

export interface IPlanetCoordinatesInSphere {
  coordinatesInSphere: PlanetCoordinatesInSphere;
}

export interface IPlanetRadius {
  radius: PlanetRadius;
}

export interface IPlanet {
  coordinatesInDecart: PlanetCoordinatesInDecart;
  coordinatesInSphere: PlanetCoordinatesInSphere;
  radius: PlanetRadius;
}

export interface PlanetsState {
  planets: IPlanet[];
  loading: boolean;
  error: string | null;
}

export enum PlanetsActionTypes {
  FETCH_PLANETS = 'FETCH_PLANETS',
  FETCH_PLANETS_SUCCESS = 'FETCH_PLANETS_SUCCESS',
  FETCH_PLANETS_ERROR = 'FETCH_PLANETS_ERROR'
}

export interface FetchPlanetsAction {
  type: PlanetsActionTypes.FETCH_PLANETS;
}

export interface FetchPlanetsSuccessAction {
  type: PlanetsActionTypes.FETCH_PLANETS_SUCCESS;
  payload: IPlanet[];
}

export interface FetchPlanetsErrorAction {
  type: PlanetsActionTypes.FETCH_PLANETS_ERROR;
  payload: string;
}

export type PlanetsAction =
  | FetchPlanetsAction
  | FetchPlanetsSuccessAction
  | FetchPlanetsErrorAction;
