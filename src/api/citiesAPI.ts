import { FETCH_CITIES_URL } from '../config/urls';
import { $api } from './axios';
// types
import { AxiosResponse } from 'axios';
import { ICityRequestBody, ICity } from '../types/city';

const getCitiesInfo = async (
  data: ICityRequestBody
): Promise<AxiosResponse<ICity[]>> => {
  const response = await $api.post<ICity[], AxiosResponse<ICity[]>>(
    `${FETCH_CITIES_URL}`,
    data
  );
  return response;
};

const getCityIdByName = async (name: string): Promise<number | null> => {
  try {
    const response = await getCitiesInfo({ name });
    return response.data[0].id;
  } catch (e) {
    return null;
  }
};

export { getCitiesInfo, getCityIdByName };
