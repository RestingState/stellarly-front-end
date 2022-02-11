import { StarsState, StarsActionTypes, StarsAction } from '../../types/star';

const initialState: StarsState = {
  stars: [],
  loading: false,
  error: null
};

export const starReducer = (state = initialState, action: StarsAction) => {
  switch (action.type) {
    case StarsActionTypes.FETCH_STARS:
      return { loading: true, error: null, stars: [] };
    case StarsActionTypes.FETCH_STARS_SUCCESS:
      return { loading: false, error: null, stars: action.payload };
    case StarsActionTypes.FETCH_STARS_ERROR:
      return { loading: false, error: action.payload, stars: [] };
    default:
      return state;
  }
};
