import { API_URL } from '../config/urls';
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios';
// constants
import { userToken } from '../types/sessionStorage';

const $api: AxiosInstance = axios.create({
  baseURL: API_URL
});

const $authApi: AxiosInstance = axios.create({
  baseURL: API_URL
});

// $api.interceptors.response.use(
//   (response: AxiosResponse): AxiosResponse => {
//     return response;
//   },
//   (error: AxiosError): Promise<AxiosError> => {
//     return Promise.reject(error.response);
//   }
// );

$authApi.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    (config.headers ??= {}).Authorization = `Bearer ${sessionStorage.getItem(
      userToken
    )}`;
    return config;
  }
);

$authApi.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError): Promise<AxiosError> => {
    if (error?.response?.status === 401) {
      sessionStorage.removeItem(userToken);
    }
    // return Promise.reject(error.response);
    return Promise.reject(error);
  }
);

export { $api, $authApi };
