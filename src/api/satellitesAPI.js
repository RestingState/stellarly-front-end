import { FETCH_SATELLITES_URL } from "../config";
import { $api } from "./axios";

const fetchSatellites = async (limit) => {
  if (limit) {
    return await $api.get(`${FETCH_SATELLITES_URL}?limit=${limit}`);
  } else {
    return await $api.get(`${FETCH_SATELLITES_URL}`);
  }
};

export default fetchSatellites;
