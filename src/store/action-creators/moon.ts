import { FETCH_MOON_URL } from '../../config/urls';
import { $api } from '../../api/axios';
// Helpers
import { getMoonData } from '../../helpers/moon';
import { isPersistedState } from '../../helpers/storage';
// Types
import { Dispatch } from 'react';
import * as type from '../../types/moon';
import { AxiosResponse } from 'axios';
import { moon } from '../../types/sessionStorage';
import { SkyObjectsTypes } from '../../types/skyObjects';

const fetchMoonAction = (): type.FetchMoonAction => {
  return { type: type.MoonActionTypes.FETCH_MOON };
};

const fetchMoonSuccessAction = (
  payload: type.IMoon
): type.FetchMoonSuccessAction => {
  return {
    type: type.MoonActionTypes.FETCH_MOON_SUCCESS,
    payload
  };
};

const fetchMoonErrorAction = (payload: string): type.FetchMoonErrorAction => {
  return {
    type: type.MoonActionTypes.FETCH_MOON_ERROR,
    payload
  };
};

export const fetchMoon = (): any => {
  return async (dispatch: Dispatch<type.MoonAction>): Promise<type.IMoon> => {
    try {
      dispatch(fetchMoonAction());

      // if exist get data from session storage
      const sessionState = isPersistedState(SkyObjectsTypes.moon);
      if (sessionState) {
        dispatch(fetchMoonSuccessAction(sessionState));
        return Promise.resolve(sessionState);
      }

      // if not, then from server
      const response = await $api.get<
        type.IMoonServer,
        AxiosResponse<type.IMoonServer>
      >(`${FETCH_MOON_URL}`);

      // extract only needed data
      const moonData: type.IMoon = getMoonData(response.data);

      // save data to variable
      dispatch(fetchMoonSuccessAction(moonData));
      // save data to local storage
      sessionStorage.setItem(moon, JSON.stringify(moonData));
      return Promise.resolve(moonData);
    } catch (e) {
      const errorMessage = 'Error during moon fetching';
      dispatch(fetchMoonErrorAction(errorMessage));
      return Promise.reject(errorMessage);
    }
  };
};
