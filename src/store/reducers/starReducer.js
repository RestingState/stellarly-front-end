import { StarActionTypes } from "../../types/star";

const initialState = {
  stars: [],
  loading: false,
  error: null,
};

export const starReducer = (state = initialState, action) => {
  switch (action.type) {
    case StarActionTypes.FETCH_STARS:
      return { loading: true, error: null, stars: [] };
    case StarActionTypes.FETCH_STARS_SUCCESS:
      // console.log(action.payload);
      return { loading: false, error: null, stars: action.payload };
    case StarActionTypes.FETCH_STARS_ERROR:
      return { loading: false, error: action.payload, stars: [] };
    default:
      return state;
  }
};
