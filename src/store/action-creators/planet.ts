import { FETCH_PLANETS_URL } from '../../config/urls';
import { $api } from '../../api/axios';
// Helpers
import { getPlanetsData } from '../../helpers/planet';
import { isPersistedState } from '../../helpers/storage';
// Types
import { Dispatch } from 'redux';
import * as type from '../../types/planet';
import { AxiosResponse } from 'axios';
import { planets } from '../../types/sessionStorage';

const fetchPlanetsAction = (): type.FetchPlanetsAction => {
  return { type: type.PlanetsActionTypes.FETCH_PLANETS };
};

const fetchPlanetsSuccessAction = (
  payload: type.IPlanet[]
): type.FetchPlanetsSuccessAction => {
  return {
    type: type.PlanetsActionTypes.FETCH_PLANETS_SUCCESS,
    payload
  };
};

const fetchPlanetsErrorAction = (
  payload: string
): type.FetchPlanetsErrorAction => {
  return {
    type: type.PlanetsActionTypes.FETCH_PLANETS_ERROR,
    payload
  };
};

export const fetchPlanets = () => {
  return async (dispatch: Dispatch<type.PlanetsAction>) => {
    try {
      dispatch(fetchPlanetsAction());

      // if exist get data from session storage
      const sessionState = isPersistedState(planets);
      if (sessionState) {
        dispatch(fetchPlanetsSuccessAction(sessionState));
      }

      // if not, then from server
      const response = await $api.get<
        type.IPlanetServer[],
        AxiosResponse<type.IPlanetServer[]>
      >(`${FETCH_PLANETS_URL}`);

      // extract only needed data
      const planetsData: type.IPlanet[] = getPlanetsData(response.data);

      // save data to variable
      dispatch(fetchPlanetsSuccessAction(planetsData));
      // save data to local storage
      sessionStorage.setItem(planets, JSON.stringify(planetsData));
    } catch (e) {
      const errorMessage = 'Error during planets fetching';
      dispatch(fetchPlanetsErrorAction(errorMessage));
    }
  };
};
