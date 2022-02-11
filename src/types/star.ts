export interface IStarServer {
  declination: string;
  flux_visible_light: string;
  id: number;
  name: string;
  parallax: string;
  right_ascension: string;
  spectral_type: string;
}

export type StarCoordinates = [right_ascension: number, declination: number];

export interface IStar {
  coordinates: StarCoordinates;
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
