import { FETCH_STARS_URL } from '../../config/urls';
import { $api } from '../../api/axios';
// Helpers
import { getStarsData } from '../../helpers/star';
import { isPersistedState } from '../../helpers/storage';
// Types
import { Dispatch } from 'redux';
import * as type from '../../types/star';
import { AxiosResponse } from 'axios';
import { stars } from '../../types/sessionStorage';

const fetchStarsAction = (): type.FetchStarsAction => {
  return { type: type.StarsActionTypes.FETCH_STARS };
};

const fetchStarsSuccessAction = (
  payload: type.IStar[]
): type.FetchStarsSuccessAction => {
  return {
    type: type.StarsActionTypes.FETCH_STARS_SUCCESS,
    payload
  };
};

const fetchStarsErrorAction = (payload: string): type.FetchStarsErrorAction => {
  return {
    type: type.StarsActionTypes.FETCH_STARS_ERROR,
    payload
  };
};

export const fetchStars = (
  limit: number = 10,
  sort: type.SortTypes = type.SortTypes.stars
): any => {
  return async (
    dispatch: Dispatch<type.StarsAction>
  ): Promise<type.IStar[]> => {
    try {
      dispatch(fetchStarsAction());

      // if exist get data from session storage
      const sessionState = isPersistedState(stars);
      if (sessionState) {
        dispatch(fetchStarsSuccessAction(sessionState));
        return Promise.resolve(sessionState);
      }

      // if not, then from server
      const response = await $api.get<
        type.IStarServer[],
        AxiosResponse<type.IStarServer[]>
      >(`${FETCH_STARS_URL}&limit=${limit}&sort=${sort}`);

      // extract only needed data
      const starsData = getStarsData(response.data);
      dispatch(fetchStarsSuccessAction(starsData));

      // save data to local storage
      sessionStorage.setItem(stars, JSON.stringify(starsData));
      return Promise.resolve(starsData);
    } catch (e) {
      const errorMessage = 'Error during star fetching';
      dispatch(fetchStarsErrorAction(errorMessage));
      return Promise.reject(errorMessage);
    }
  };
};
