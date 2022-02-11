import {
  PlanetsState,
  PlanetsActionTypes,
  PlanetsAction
} from '../../types/planet';

const initialState: PlanetsState = {
  planets: [],
  loading: false,
  error: null
};

export const planetReducer = (state = initialState, action: PlanetsAction) => {
  switch (action.type) {
    case PlanetsActionTypes.FETCH_PLANETS:
      return { loading: true, error: null, planets: [] };
    case PlanetsActionTypes.FETCH_PLANETS_SUCCESS:
      return { loading: false, error: null, planets: action.payload };
    case PlanetsActionTypes.FETCH_PLANETS_ERROR:
      return { loading: false, error: action.payload, planets: [] };
    default:
      return state;
  }
};
