import { $api } from '../../api/axios';
import axios from 'axios';
import { FETCH_MOON_URL } from '../../config';
import { MoonActionTypes } from '../../types/moon';
import { getMoonData } from '../../helpers/moon';
import { isPersistedState } from '../../helpers/storage';

const fetchMoonAction = () => {
  return { type: MoonActionTypes.FETCH_MOON };
};

const fetchMoonSuccessAction = (payload) => {
  return {
    type: MoonActionTypes.FETCH_MOON_SUCCESS,
    payload
  };
};

const fetchMoonErrorAction = (payload) => {
  return {
    type: MoonActionTypes.FETCH_MOON_ERROR,
    payload
  };
};

export const fetchMoon = (source) => {
  return async (dispatch) => {
    try {
      dispatch(fetchMoonAction());

      // if exist get data from session storage
      const sessionState = isPersistedState('moon');
      if (sessionState) {
        dispatch(fetchMoonSuccessAction(sessionState));
        return Promise.resolve(sessionState);
      }

      // if not, then from server
      const response = await $api.get(`${FETCH_MOON_URL}`, {
        cancelToken: source.token
      });

      // extract only needed data
      const moonData = getMoonData(response.data);

      // save data to variable
      dispatch(fetchMoonSuccessAction(moonData));
      // save data to local storage
      sessionStorage.setItem('moon', JSON.stringify(moonData));

      return Promise.resolve(moonData);
    } catch (e) {
      if (axios.isCancel(e)) {
        return 'axios request cancelled';
      }
      dispatch(fetchMoonErrorAction('Error during moon fetching'));
    }
  };
};
