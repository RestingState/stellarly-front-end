import { FETCH_WEATHER_URL } from "../config";
import { $api } from "./axios";

const fetchWeather = async (token, city = null) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  if (city) {
    return await $api.get(`${FETCH_WEATHER_URL}?city=${city}`, config);
  } else {
    return await $api.get(`${FETCH_WEATHER_URL}`, config);
  }
};

export default fetchWeather;
