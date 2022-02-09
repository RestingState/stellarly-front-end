import { API_URL } from '../config/urls';
import axios from 'axios';

const $api = axios.create({
  baseURL: API_URL
});

const $authApi = axios.create({
  baseURL: API_URL
});

$api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

$authApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${sessionStorage.getItem(
    'user_token'
  )}`;
  return config;
});

$authApi.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      sessionStorage.removeItem('user_token');
    }
    return Promise.reject(error.response);
  }
);

export { $api, $authApi };
