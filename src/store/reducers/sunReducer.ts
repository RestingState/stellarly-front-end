import {
  SunState,
  SunActionTypes,
  SunAction,
  defaultSun
} from '../../types/sun';

const initialState: SunState = {
  sun: defaultSun,
  loading: false,
  error: null
};

export const sunReducer = (state = initialState, action: SunAction) => {
  switch (action.type) {
    case SunActionTypes.FETCH_SUN:
      return { loading: true, error: null, sun: {} };
    case SunActionTypes.FETCH_SUN_SUCCESS:
      return { loading: false, error: null, sun: action.payload };
    case SunActionTypes.FETCH_SUN_ERROR:
      return { loading: false, error: action.payload, sun: {} };
    default:
      return state;
  }
};
