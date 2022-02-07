import { FETCH_CITIES_URL } from '../config';
import { $api } from './axios';

const getCitiesInfo = async (data) => {
  const response = await $api.post(`${FETCH_CITIES_URL}`, data);
  return response;
};

export { getCitiesInfo };
