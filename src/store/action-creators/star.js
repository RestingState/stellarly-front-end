import { $api } from '../../api/axios';
import axios from 'axios';
import { FETCH_STARS_URL } from '../../config';
import { StarActionTypes } from '../../types/star';
import { getStarsCoordinates } from '../../helpers/star';
import { isPersistedState } from '../../helpers/storage';

const fetchStarsAction = () => {
  return { type: StarActionTypes.FETCH_STARS };
};

const fetchStarsSuccessAction = (payload) => {
  return {
    type: StarActionTypes.FETCH_STARS_SUCCESS,
    payload
  };
};

const fetchStarsErrorAction = (payload) => {
  return {
    type: StarActionTypes.FETCH_STARS_ERROR,
    payload
  };
};

export const fetchStars = (source, limit = 10, sort = 'stars') => {
  return async (dispatch) => {
    try {
      dispatch(fetchStarsAction());

      // if exist get data from session storage
      const sessionState = isPersistedState('stars');
      if (sessionState) {
        dispatch(fetchStarsSuccessAction(sessionState));
        return Promise.resolve(sessionState);
      }

      // if not, then from server
      const response = await $api.get(
        `${FETCH_STARS_URL}&limit=${limit}&sort=${sort}`,
        {
          cancelToken: source.token
        }
      );
      response.data = getStarsCoordinates(response.data);
      dispatch(fetchStarsSuccessAction(response.data));
      // save data to local storage
      sessionStorage.setItem('stars', JSON.stringify(response.data));

      return Promise.resolve(response.data);
    } catch (e) {
      if (axios.isCancel(e)) {
        return 'axios request cancelled';
      }
      dispatch(fetchStarsErrorAction('Error during star fetching'));
    }
  };
};
