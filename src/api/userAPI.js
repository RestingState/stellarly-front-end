import { REGISTRATION_URL, LOGIN_URL, GET_USER_INFO_URL } from '../config';
import { $api, $authApi } from './axios';

const createUser = async (data) => {
  const response = await $api.post(`${REGISTRATION_URL}`, data);
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
