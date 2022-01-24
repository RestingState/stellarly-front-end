import { $api } from '../../api/axios';
import { FETCH_PLANETS_URL } from '../../config';
import { PlanetActionTypes } from '../../types/planet';
import { getPlanetsCoordinates } from '../../helpers/planet';
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

export const fetchPlanets = () => {
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
      const response = await $api.get(`${FETCH_PLANETS_URL}`);
      response.data = getPlanetsCoordinates(response.data);
      dispatch(fetchPlanetsSuccessAction(response.data));
      // save data to local storage
      sessionStorage.setItem('planets', JSON.stringify(response.data));

      return Promise.resolve(response.data);
    } catch (e) {
      dispatch(fetchPlanetsErrorAction('Error during planet fetching'));
    }
  };
};
