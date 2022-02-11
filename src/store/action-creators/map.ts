import { Dispatch } from 'react';
import * as type from '../../types/map';

const setLongitudeAction = (payload: number): type.SetMapLongitudeAction => {
  return { type: type.MapActionTypes.SET_LONGITUDE, payload };
};

const setLatitudeAction = (payload: number): type.SetMapLatitudeAction => {
  return { type: type.MapActionTypes.SET_LATITUDE, payload };
};

const setRightAscensionAction = (
  payload: number
): type.SetMapRightAscensionAction => {
  return { type: type.MapActionTypes.SET_RIGHT_ASCENSION, payload };
};

const setDeclinationAction = (
  payload: number
): type.SetMapDeclinationAction => {
  return { type: type.MapActionTypes.SET_DECLINATION, payload };
};

const setZoomAction = (payload: number): type.SetMapZoomAction => {
  return { type: type.MapActionTypes.SET_ZOOM, payload };
};

const setStarsViewAction = (payload: boolean): type.SetMapStarsViewAction => {
  return { type: type.MapActionTypes.SET_STARS_VIEW, payload };
};

const setPlanetsViewAction = (
  payload: boolean
): type.SetMapPlanetsViewAction => {
  return { type: type.MapActionTypes.SET_PLANETS_VIEW, payload };
};

const setSatellitesViewAction = (
  payload: boolean
): type.SetMapSatellitesViewAction => {
  return { type: type.MapActionTypes.SET_SATELLITES_VIEW, payload };
};

const setMoonSunViewAction = (
  payload: boolean
): type.SetMapMoonSunViewAction => {
  return { type: type.MapActionTypes.SET_MOON_SUN_VIEW, payload };
};

export const setLongitude = (payload: number) => {
  return (dispatch: Dispatch<type.MapAction>) => {
    dispatch(setLongitudeAction(payload));
  };
};

export const setLatitude = (payload: number) => {
  return (dispatch: Dispatch<type.MapAction>) => {
    dispatch(setLatitudeAction(payload));
  };
};

export const setRightAscension = (payload: number) => {
  return (dispatch: Dispatch<type.MapAction>) => {
    dispatch(setRightAscensionAction(payload));
  };
};

export const setDeclination = (payload: number) => {
  return (dispatch: Dispatch<type.MapAction>) => {
    dispatch(setDeclinationAction(payload));
  };
};

export const setZoom = (payload: number) => {
  return (dispatch: Dispatch<type.MapAction>) => {
    dispatch(setZoomAction(payload));
  };
};

export const setStarsView = (payload: boolean) => {
  return (dispatch: Dispatch<type.MapAction>) => {
    dispatch(setStarsViewAction(payload));
  };
};

export const setPlanetsView = (payload: boolean) => {
  return (dispatch: Dispatch<type.MapAction>) => {
    dispatch(setPlanetsViewAction(payload));
  };
};

export const setSatellitesView = (payload: boolean) => {
  return (dispatch: Dispatch<type.MapAction>) => {
    dispatch(setSatellitesViewAction(payload));
  };
};

export const setMoonSunView = (payload: boolean) => {
  return (dispatch: Dispatch<type.MapAction>) => {
    dispatch(setMoonSunViewAction(payload));
  };
};
