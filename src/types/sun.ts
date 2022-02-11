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

export type SunCoordinates = [right_ascension: number, declination: number];
export type SunRadius = string;

export interface ISunCoordinates {
  coordinates: SunCoordinates;
}

export interface ISunRadius {
  radius: SunRadius;
}

export interface ISun {
  coordinates: SunCoordinates;
  radius: SunRadius;
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
  coordinates: [0, 0],
  radius: ''
};
