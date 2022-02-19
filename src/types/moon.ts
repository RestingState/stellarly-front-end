interface IMoonCoordinatesServer {
  date: string;
  dec: string;
  id: number;
  planet_id: number;
  ra: string;
}

interface IMoonInformationServer {
  density: string;
  id: number;
  mass: string;
  mean_temperature: string;
  name: string;
  radius: string;
  visual_mag: string;
}

export interface IMoonServer {
  coordinates: IMoonCoordinatesServer;
  information: IMoonInformationServer;
  name: string;
}

export type MoonCoordinatesInDecart = [
  right_ascension: number,
  declination: number
];
export type MoonCoordinatesInSphere = [x: number, y: number, z: number];
export type MoonRadius = string;

export interface IMoonCoordinatesInDecart {
  MoonCoordinatesInDecart: MoonCoordinatesInDecart;
}

export interface IMoonCoordinatesInSphere {
  MoonCoordinatesInSphere: MoonCoordinatesInSphere;
}

export interface IMoonRadius {
  radius: MoonRadius;
}

export interface IMoon {
  MoonCoordinatesInDecart: MoonCoordinatesInDecart;
  MoonCoordinatesInSphere: MoonCoordinatesInSphere;
  radius: MoonRadius;
}

export interface MoonState {
  moon: IMoon;
  loading: boolean;
  error: string | null;
}

export enum MoonActionTypes {
  FETCH_MOON = 'FETCH_MOON',
  FETCH_MOON_SUCCESS = 'FETCH_MOON_SUCCESS',
  FETCH_MOON_ERROR = 'FETCH_MOON_ERROR'
}

export interface FetchMoonAction {
  type: MoonActionTypes.FETCH_MOON;
}

export interface FetchMoonSuccessAction {
  type: MoonActionTypes.FETCH_MOON_SUCCESS;
  payload: IMoon;
}

export interface FetchMoonErrorAction {
  type: MoonActionTypes.FETCH_MOON_ERROR;
  payload: string;
}

export type MoonAction =
  | FetchMoonAction
  | FetchMoonSuccessAction
  | FetchMoonErrorAction;

export const defaultMoon: IMoon = {
  MoonCoordinatesInDecart: [0, 0],
  MoonCoordinatesInSphere: [0, 0, 0],
  radius: ''
};
