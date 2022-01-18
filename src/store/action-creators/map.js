import { MapActionTypes } from "../../types/map";

const setLongitudeAction = (payload) => {
  return { type: MapActionTypes.SET_LONGITUDE, payload };
};

const setLatitudeAction = (payload) => {
  return { type: MapActionTypes.SET_LATITUDE, payload };
};

const setRightAscensionAction = (payload) => {
  return { type: MapActionTypes.SET_RIGHT_ASCENSION, payload };
};

const setDeclinationAction = (payload) => {
  return { type: MapActionTypes.SET_DECLINATION, payload };
};

const setZoomAction = (payload) => {
  return { type: MapActionTypes.SET_ZOOM, payload };
};

const setStarsViewAction = (payload) => {
  return { type: MapActionTypes.SET_STARS_VIEW, payload };
};

const setPlanetsViewAction = (payload) => {
  return { type: MapActionTypes.SET_PLANETS_VIEW, payload };
};

const setSatellitesViewAction = (payload) => {
  return { type: MapActionTypes.SET_SATELLITES_VIEW, payload };
};

const setMoonSunViewAction = (payload) => {
  return { type: MapActionTypes.SET_MOON_SUN_VIEW, payload };
};

export const setLongitude = (payload) => {
  return (dispatch) => {
    dispatch(setLongitudeAction(payload));
  };
};

export const setLatitude = (payload) => {
  return (dispatch) => {
    dispatch(setLatitudeAction(payload));
  };
};

export const setRightAscension = (payload) => {
  return (dispatch) => {
    dispatch(setRightAscensionAction(payload));
  };
};

export const setDeclination = (payload) => {
  return (dispatch) => {
    dispatch(setDeclinationAction(payload));
  };
};

export const setZoom = (payload) => {
  return (dispatch) => {
    dispatch(setZoomAction(payload));
  };
};

export const setStarsView = (payload) => {
  return (dispatch) => {
    dispatch(setStarsViewAction(payload));
  };
};

export const setPlanetsView = (payload) => {
  return (dispatch) => {
    dispatch(setPlanetsViewAction(payload));
  };
};

export const setSatellitesView = (payload) => {
  return (dispatch) => {
    dispatch(setSatellitesViewAction(payload));
  };
};

export const setMoonSunView = (payload) => {
  return (dispatch) => {
    dispatch(setMoonSunViewAction(payload));
  };
};
