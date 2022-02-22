interface ISunCoordinatesServer {
  date: string;
  dec: string;
  id: number;
  planet_id: number;
  ra: string;
}

interface ISunInformationServer {
  density: string;
  id: number;
  mass: string;
  mean_temperature: string;
  name: string;
  radius: string;
  visual_mag: string;
}

export interface ISunServer {
  coordinates: ISunCoordinatesServer;
  information: ISunInformationServer;
  name: string;
}

export type SunCoordinatesInDecart = [
  right_ascension: number,
  declination: number
];
export type SunCoordinatesInSphere = [x: number, y: number, z: number];
export type SunInfo = {
  density: number;
  id: number;
  mass: number;
  mean_temperature: number;
  name: string;
  radius: number;
  visual_mag: number;
};

export interface ISunCoordinatesInDecart {
  coordinatesInDecart: SunCoordinatesInDecart;
}

export interface ISunCoordinatesInSphere {
  coordinatesInSphere: SunCoordinatesInSphere;
}

export interface ISunInfo {
  information: SunInfo;
}

export interface ISun {
  coordinatesInDecart: SunCoordinatesInDecart;
  coordinatesInSphere: SunCoordinatesInSphere;
  information: SunInfo;
}

export interface SunState {
  sun: ISun;
  loading: boolean;
  error: string | null;
}

export enum SunActionTypes {
  FETCH_SUN = 'FETCH_SUN',
  FETCH_SUN_SUCCESS = 'FETCH_SUN_SUCCESS',
  FETCH_SUN_ERROR = 'FETCH_SUN_ERROR'
}

export interface FetchSunAction {
  type: SunActionTypes.FETCH_SUN;
}

export interface FetchSunSuccessAction {
  type: SunActionTypes.FETCH_SUN_SUCCESS;
  payload: ISun;
}

export interface FetchSunErrorAction {
  type: SunActionTypes.FETCH_SUN_ERROR;
  payload: string;
}

export type SunAction =
  | FetchSunAction
  | FetchSunSuccessAction
  | FetchSunErrorAction;

export const defaultSun: ISun = {
  coordinatesInDecart: [0, 0],
  coordinatesInSphere: [0, 0, 0],
  information: {
    density: 0,
    id: 0,
    mass: 0,
    mean_temperature: 0,
    name: 'undefined',
    radius: 0,
    visual_mag: 0
  }
};
