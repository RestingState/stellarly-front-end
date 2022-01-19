import { $api } from "../../api/axios";
import { FETCH_STARS_URL } from "../../config";
import { StarActionTypes } from "../../types/star";

const fetchStarsAction = () => {
  return { type: StarActionTypes.FETCH_STARS };
};

const fetchStarsSuccessAction = (payload) => {
  return {
    type: StarActionTypes.FETCH_STARS_SUCCESS,
    payload,
  };
};

const fetchStarsErrorAction = (payload) => {
  return {
    type: StarActionTypes.FETCH_STARS_ERROR,
    payload,
  };
};

export const fetchStars = (limit = 10) => {
  return async (dispatch) => {
    try {
      dispatch(fetchStarsAction());
      const response = await $api.get(`${FETCH_STARS_URL}?limit=${limit}`);
      dispatch(fetchStarsSuccessAction(response.data));
    } catch (e) {
      dispatch(fetchStarsErrorAction("Error during star fetching"));
    }
  };
};
