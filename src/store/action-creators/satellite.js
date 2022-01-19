import { $api } from "../../api/axios";
import { FETCH_SATELLITES_URL } from "../../config";
import { SatelliteActionTypes } from "../../types/satellite";

const fetchSatellitesAction = () => {
  return { type: SatelliteActionTypes.FETCH_SATELLITES };
};

const fetchSatellitesSuccessAction = (payload) => {
  return {
    type: SatelliteActionTypes.FETCH_SATELLITES_SUCCESS,
    payload,
  };
};

const fetchSatellitesErrorAction = (payload) => {
  return {
    type: SatelliteActionTypes.FETCH_SATELLITES_ERROR,
    payload,
  };
};

export const fetchSatellites = (limit = 10) => {
  return async (dispatch) => {
    try {
      dispatch(fetchSatellitesAction());
      const response = await $api.get(`${FETCH_SATELLITES_URL}?limit=${limit}`);
      dispatch(fetchSatellitesSuccessAction(response.data));
    } catch (e) {
      dispatch(fetchSatellitesErrorAction("Error during satellite fetching"));
    }
  };
};
