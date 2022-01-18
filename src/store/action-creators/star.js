import { $api } from "../../api/axios";
import { FETCH_STARS_URL } from "../../config";
import { StarActionTypes } from "../../types/star";

export const fetchStars = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: StarActionTypes.FETCH_STARS });
      const response = await $api.get(`${FETCH_STARS_URL}?limit=10`);
      dispatch({
        type: StarActionTypes.FETCH_STARS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: StarActionTypes.FETCH_STARS_ERROR,
        payload: "Error during star fetching",
      });
    }
  };
};
