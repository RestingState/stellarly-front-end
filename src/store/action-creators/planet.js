import { $api } from '../../api/axios';
import axios from 'axios';
import { FETCH_PLANETS_URL } from '../../config';
import { PlanetActionTypes } from '../../types/planet';
import { getPlanetsData } from '../../helpers/planet';
import { isPersistedState } from '../../helpers/storage';

const fetchPlanetsAction = () => {
  return { type: PlanetActionTypes.FETCH_PLANETS };
};

const fetchPlanetsSuccessAction = (payload) => {
  return {
    type: PlanetActionTypes.FETCH_PLANETS_SUCCESS,
    payload
  };
};

const fetchPlanetsErrorAction = (payload) => {
  return {
    type: PlanetActionTypes.FETCH_PLANETS_ERROR,
    payload
  };
};

export const fetchPlanets = (source) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPlanetsAction());

      // if exist get data from session storage
      const sessionState = isPersistedState('planets');
      if (sessionState) {
        dispatch(fetchPlanetsSuccessAction(sessionState));
        return Promise.resolve(sessionState);
      }

      // if not, then from server
      const response = await $api.get(`${FETCH_PLANETS_URL}`, {
        cancelToken: source.token
      });

      // extract only needed data
      const planetsData = getPlanetsData(response.data);

      // save data to variable
      dispatch(fetchPlanetsSuccessAction(planetsData));
      // save data to local storage
      sessionStorage.setItem('planets', JSON.stringify(planetsData));

      return Promise.resolve(planetsData);
    } catch (e) {
      if (axios.isCancel(e)) {
        return 'axios request cancelled';
      }
      dispatch(fetchPlanetsErrorAction('Error during planet fetching'));
    }
  };
};
