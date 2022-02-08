import { FETCH_CITIES_URL } from '../config';
import { $api } from './axios';

const getCitiesInfo = async (data) => {
  const response = await $api.post(`${FETCH_CITIES_URL}`, data);
  return response;
};

const getCityIdByName = async (name) => {
  try {
    const response = await getCitiesInfo({ name });
    return response.data[0].id;
  } catch (e) {
    return null;
  }
};

export { getCitiesInfo, getCityIdByName };
