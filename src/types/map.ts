export interface MapState {
  longitude: number;
  latitude: number;
  right_ascension: number;
  declination: number;
  zoom: number;
  stars_view: boolean;
  planets_view: boolean;
  satellites_view: boolean;
  moon_sun_view: boolean;
}

export enum MapActionTypes {
  SET_LONGITUDE = 'SET_LONGITUDE',
  SET_LATITUDE = 'SET_LATITUDE',
  SET_RIGHT_ASCENSION = 'SET_RIGHT_ASCENSION',
  SET_DECLINATION = 'SET_DECLINATION',
  SET_ZOOM = 'SET_ZOOM',
  SET_STARS_VIEW = 'SET_STARS_VIEW',
  SET_PLANETS_VIEW = 'SET_PLANETS_VIEW',
  SET_SATELLITES_VIEW = 'SET_SATELLITES_VIEW',
  SET_MOON_SUN_VIEW = 'SET_MOON_SUN_VIEW'
}

export interface SetMapLongitudeAction {
  type: MapActionTypes.SET_LONGITUDE;
  payload: number;
}

export interface SetMapLatitudeAction {
  type: MapActionTypes.SET_LATITUDE;
  payload: number;
}

export interface SetMapRightAscensionAction {
  type: MapActionTypes.SET_RIGHT_ASCENSION;
  payload: number;
}

export interface SetMapDeclinationAction {
  type: MapActionTypes.SET_DECLINATION;
  payload: number;
}

export interface SetMapZoomAction {
  type: MapActionTypes.SET_ZOOM;
  payload: number;
}

export interface SetMapStarsViewAction {
  type: MapActionTypes.SET_STARS_VIEW;
  payload: boolean;
}

export interface SetMapPlanetsViewAction {
  type: MapActionTypes.SET_PLANETS_VIEW;
  payload: boolean;
}

export interface SetMapSatellitesViewAction {
  type: MapActionTypes.SET_SATELLITES_VIEW;
  payload: boolean;
}

export interface SetMapMoonSunViewAction {
  type: MapActionTypes.SET_MOON_SUN_VIEW;
  payload: boolean;
}

export type MapAction =
  | SetMapLongitudeAction
  | SetMapLatitudeAction
  | SetMapRightAscensionAction
  | SetMapDeclinationAction
  | SetMapZoomAction
  | SetMapStarsViewAction
  | SetMapPlanetsViewAction
  | SetMapSatellitesViewAction
  | SetMapMoonSunViewAction;
