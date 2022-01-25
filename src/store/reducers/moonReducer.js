import { MoonActionTypes } from '../../types/moon';

const initialState = {
  moon: {},
  loading: false,
  error: null
};

export const moonReducer = (state = initialState, action) => {
  switch (action.type) {
    case MoonActionTypes.FETCH_MOON:
      return { loading: true, error: null, moon: {} };
    case MoonActionTypes.FETCH_MOON_SUCCESS:
      return { loading: false, error: null, moon: action.payload };
    case MoonActionTypes.FETCH_MOON_ERROR:
      return { loading: false, error: action.payload, moon: {} };
    default:
      return state;
  }
};
