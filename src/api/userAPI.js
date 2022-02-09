import { REGISTRATION_URL, LOGIN_URL, GET_USER_INFO_URL } from '../config/urls';
import { $api, $authApi } from './axios';
import { transformDataToRegister } from './dto/user';

const createUser = async (userData) => {
  const userDataDTO = transformDataToRegister(userData);
  const response = await $api.post(`${REGISTRATION_URL}`, userDataDTO);
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
  const userData = {
    firstName: response.data.first_name,
    lastName: response.data.last_name,
    username: response.data.username,
    email: response.data.email,
    cityId: response.data.city_id
  };
  response.data = userData;
  return response;
};

const isAuth = async () => {
  try {
    const response = await getUserInfo();
    if (response.status != 200) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
};

export { createUser, loginUser, getUserInfo, isAuth };
