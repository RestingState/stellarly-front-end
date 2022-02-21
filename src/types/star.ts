export interface IStarServer {
  declination: string;
  flux_visible_light: string;
  id: number;
  name: string;
  parallax: string;
  right_ascension: string;
  spectral_type: string;
}

export type StarCoordinatesInDecart = [
  right_ascension: number,
  declination: number
];
export type StarCoordinatesInSphere = [x: number, y: number, z: number];
export type Parallax = number;
export type Flux_V = number;

export interface IStar {
  id: number;
  name: string;
  spectral_type: string;
  coordinatesInDecart: StarCoordinatesInDecart;
  coordinatesInSphere: StarCoordinatesInSphere;
  parallax: Parallax;
  flux_v: Flux_V;
}

export interface StarsState {
  stars: IStar[];
  loading: boolean;
  error: string | null;
}

export enum StarsActionTypes {
  FETCH_STARS = 'FETCH_STARS',
  FETCH_STARS_SUCCESS = 'FETCH_STARS_SUCCESS',
  FETCH_STARS_ERROR = 'FETCH_STARS_ERROR'
}

export interface FetchStarsAction {
  type: StarsActionTypes.FETCH_STARS;
}

export interface FetchStarsSuccessAction {
  type: StarsActionTypes.FETCH_STARS_SUCCESS;
  payload: IStar[];
}

export interface FetchStarsErrorAction {
  type: StarsActionTypes.FETCH_STARS_ERROR;
  payload: string;
}

export type StarsAction =
  | FetchStarsAction
  | FetchStarsSuccessAction
  | FetchStarsErrorAction;

export enum SortTypes {
  stars = 'stars',
  flux_v = 'flux_v',
  parallax = 'parallax'
}
