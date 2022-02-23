import { FETCH_SUN_URL } from '../../config/urls';
import { $api } from '../../api/axios';
// Helpers
import { getSunData } from '../../helpers/sun';
import { isPersistedState } from '../../helpers/storage';
// Types
import { Dispatch } from 'react';
import * as type from '../../types/sun';
import { AxiosResponse } from 'axios';
import { sun } from '../../types/sessionStorage';
import { SkyObjectsTypes } from '../../types/skyObjects';

const fetchSunAction = (): type.FetchSunAction => {
  return { type: type.SunActionTypes.FETCH_SUN };
};

const fetchSunSuccessAction = (
  payload: type.ISun
): type.FetchSunSuccessAction => {
  return {
    type: type.SunActionTypes.FETCH_SUN_SUCCESS,
    payload
  };
};

const fetchSunErrorAction = (payload: string): type.FetchSunErrorAction => {
  return {
    type: type.SunActionTypes.FETCH_SUN_ERROR,
    payload
  };
};

export const fetchSun = (): any => {
  return async (dispatch: Dispatch<type.SunAction>): Promise<type.ISun> => {
    try {
      dispatch(fetchSunAction());

      // if exist get data from session storage
      const sessionState = isPersistedState(SkyObjectsTypes.sun);
      if (sessionState) {
        dispatch(fetchSunSuccessAction(sessionState));
        return Promise.resolve(sessionState);
      }

      // if not, then from server
      const response = await $api.get<
        type.ISunServer,
        AxiosResponse<type.ISunServer>
      >(`${FETCH_SUN_URL}`);

      // extract only needed data
      const sunData: type.ISun = getSunData(response.data);

      // save data to variable
      dispatch(fetchSunSuccessAction(sunData));
      // save data to local storage
      sessionStorage.setItem(sun, JSON.stringify(sunData));
      return Promise.resolve(sunData);
    } catch (e) {
      const errorMessage = 'Error during sun fetching';
      dispatch(fetchSunErrorAction(errorMessage));
      return Promise.reject(errorMessage);
    }
  };
};
