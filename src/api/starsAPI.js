import { FETCH_STARS_URL } from "../config";
import { $api } from "./axios";

const fetchStars = async (limit) => {
  if (limit) {
    return await $api.get(`${FETCH_STARS_URL}?limit=${limit}`);
  } else {
    return await $api.get(`${FETCH_STARS_URL}`);
  }
};

export default fetchStars;
