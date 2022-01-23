import { MapActionTypes } from '../../types/map';

const initialState = {
  longitude: 0.0,
  latitude: 0.0,
  right_ascension: 90.0,
  declination: 90.0,
  zoom: 1,
  stars_view: true,
  planets_view: false,
  satellites_view: false,
  moon_sun_view: false
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case MapActionTypes.SET_LONGITUDE:
      return { ...state, longitude: action.payload };
    case MapActionTypes.SET_LATITUDE:
      return { ...state, latitude: action.payload };
    case MapActionTypes.SET_RIGHT_ASCENSION:
      return { ...state, right_ascension: action.payload };
    case MapActionTypes.SET_DECLINATION:
      return { ...state, declination: action.payload };
    case MapActionTypes.SET_ZOOM:
      return { ...state, zoom: action.payload };
    case MapActionTypes.SET_STARS_VIEW:
      return { ...state, stars_view: action.payload };
    case MapActionTypes.SET_PLANETS_VIEW:
      return { ...state, planets_view: action.payload };
    case MapActionTypes.SET_SATELLITES_VIEW:
      return { ...state, satellites_view: action.payload };
    case MapActionTypes.SET_MOON_SUN_VIEW:
      return { ...state, moon_sun_view: action.payload };
    default:
      return state;
  }
};
