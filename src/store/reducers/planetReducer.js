import { PlanetActionTypes } from '../../types/planet';

const initialState = {
  planets: [],
  loading: false,
  error: null
};

export const planetReducer = (state = initialState, action) => {
  switch (action.type) {
    case PlanetActionTypes.FETCH_PLANET:
      return { loading: true, error: null, planets: [] };
    case PlanetActionTypes.FETCH_PLANET_SUCCESS:
      return { loading: false, error: null, planets: action.payload };
    case PlanetActionTypes.FETCH_PLANET_ERROR:
      return { loading: false, error: action.payload, planets: [] };
    default:
      return state;
  }
};
