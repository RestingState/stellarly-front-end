import { REGISTRATION_URL, LOGIN_URL, GET_USER_INFO_URL } from '../config';
import { $api, $authApi } from './axios';

const createUser = async (userData) => {
  const data = {
    first_name: userData.first_name,
    last_name: userData.last_name,
    email: userData.email,
    password: userData.password,
    city_id: parseInt(userData.city_id),
    username: userData.username
  };
  const response = await $api.post(`${REGISTRATION_URL}`, data);
  // save token to local storage
  sessionStorage.setItem('user_token', response.data.token);
  return response;
};

const loginUser = async (data) => {
  const response = await $api.post(`${LOGIN_URL}`, data);
  return response;
};

const getUserInfo = async () => {
  const response = await $authApi.get(`${GET_USER_INFO_URL}`);
  return response;
};

export { createUser, loginUser, getUserInfo };
