import { $api } from '../../api/axios';
import axios from 'axios';
import { FETCH_SUN_URL } from '../../config';
import { SunActionTypes } from '../types/sun';
import { getSunData } from '../../helpers/sun';
import { isPersistedState } from '../../helpers/storage';

const fetchSunAction = () => {
  return { type: SunActionTypes.FETCH_SUN };
};

const fetchSunSuccessAction = (payload) => {
  return {
    type: SunActionTypes.FETCH_SUN_SUCCESS,
    payload
  };
};

const fetchSunErrorAction = (payload) => {
  return {
    type: SunActionTypes.FETCH_SUN_ERROR,
    payload
  };
};

export const fetchSun = (source) => {
  return async (dispatch) => {
    try {
      dispatch(fetchSunAction());

      // if exist get data from session storage
      const sessionState = isPersistedState('sun');
      if (sessionState) {
        dispatch(fetchSunSuccessAction(sessionState));
        return Promise.resolve(sessionState);
      }

      // if not, then from server
      const response = await $api.get(`${FETCH_SUN_URL}`, {
        cancelToken: source.token
      });

      // extract only needed data
      const sunData = getSunData(response.data);

      // save data to variable
      dispatch(fetchSunSuccessAction(sunData));
      // save data to local storage
      sessionStorage.setItem('sun', JSON.stringify(sunData));

      return Promise.resolve(sunData);
    } catch (e) {
      if (axios.isCancel(e)) {
        return 'axios request cancelled';
      }
      dispatch(fetchSunErrorAction('Error during sun fetching'));
    }
  };
};
