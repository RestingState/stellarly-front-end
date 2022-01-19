import { SatelliteActionTypes } from "../../types/satellite";

const initialState = {
  satellites: [],
  loading: false,
  error: null,
};

export const satelliteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SatelliteActionTypes.FETCH_SATELLITES:
      return { loading: true, error: null, satellites: [] };
    case SatelliteActionTypes.FETCH_SATELLITES_SUCCESS:
      return { loading: false, error: null, satellites: action.payload };
    case SatelliteActionTypes.FETCH_SATELLITES_ERROR:
      return { loading: false, error: action.payload, satellites: [] };
    default:
      return state;
  }
};
