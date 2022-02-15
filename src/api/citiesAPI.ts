import { FETCH_CITIES_URL, GET_CITY_NAME_BY_ID_FUNC_URL } from '../config/urls';
import { $api } from './axios';
// types
import { AxiosResponse } from 'axios';
import { ICityRequestBody, ICity, ICityName } from '../types/city';

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

const getCityNameById = async (id: number): Promise<string> => {
  try {
    const url = GET_CITY_NAME_BY_ID_FUNC_URL(id);
    const response = await $api.post<ICityName>(url);
    return response.data.name;
  } catch (e) {
    return '';
  }
};

export { getCitiesInfo, getCityIdByName, getCityNameById };
