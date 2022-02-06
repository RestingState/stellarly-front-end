import axios from 'axios';
import { API_URL } from '../config';

const $api = axios.create({
  baseURL: API_URL
});

const $authApi = axios.create({
  baseURL: API_URL
});

$authApi.interceptors.request.use((config) => {
  (config.headers ??= {}).Authorization = `Bearer ${sessionStorage.getItem(
    'user_token'
  )}`;
  return config;
});

$authApi.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const response = error.response;
    if (
      response.status === 422 &&
      response.data.msg === 'Not enough segments'
    ) {
      response.status = 401;
      return response;
    }
    // const originalRequest = error.config;
    // if (
    //   error.response.status == 401 &&
    //   error.config &&
    //   !error.config._isRetry
    // ) {
    //   originalRequest._isRetry = true;
    //   try {
    //     const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
    //       withCredentials: true,
    //     });
    //     localStorage.setItem("token", response.data.accessToken);
    //     return $api.request(originalRequest);
    //   } catch (e) {}
    // }
    // throw error;
  }
);

export { $api, $authApi };
