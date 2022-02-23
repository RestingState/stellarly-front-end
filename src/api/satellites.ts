import { FETCH_SATELLITES_URL } from '../config/urls';
import { $api } from './axios';
// types
import { AxiosResponse } from 'axios';
import { ISatelliteServer } from '../types/satellite';

const getSatellites = async (
  limit: number = 1000
): Promise<AxiosResponse<ISatelliteServer[]>> => {
  const response = $api.get<
    ISatelliteServer[],
    AxiosResponse<ISatelliteServer[]>
  >(`${FETCH_SATELLITES_URL}&limit=${limit}`);
  return response;
};

export { getSatellites };
