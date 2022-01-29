import axios from 'axios';
import { API_URL } from '../config';

const $api = axios.create({
  baseURL: API_URL
});

const $authApi = axios.create({
  baseURL: API_URL
});

$authApi.interceptors.request.use((config) => {
  (config.headers ??= {}).Authorization = `Bearer ${localStorage.getItem(
    'token'
  )}`;
  return config;
});

export { $api, $authApi };
