import { REGISTRATION_URL, LOGIN_URL, GET_USER_INFO_URL } from '../config/urls';
import { $api, $authApi } from './axios';
// DTO
import {
  transformUserDataFromClientToServer,
  transformUserDataFromServerToClient
} from './dto/user';
// types
import { AxiosResponse } from 'axios';
import {
  IUserClientDTO,
  IUserServerDTO,
  IUserLoginData,
  IUserToken
} from '../types/user';
// constants
import { userToken } from '../types/sessionStorage';

const createUser = async (
  userData: IUserClientDTO
): Promise<AxiosResponse<IUserToken>> => {
  const userDataDTO = transformUserDataFromClientToServer(userData);
  const response = await $api.post<IUserToken, AxiosResponse<IUserToken>>(
    `${REGISTRATION_URL}`,
    userDataDTO
  );
  // save token to local storage
  sessionStorage.setItem(userToken, response.data.token);
  return response;
};

const loginUser = async (
  data: IUserLoginData
): Promise<AxiosResponse<IUserToken>> => {
  const response = await $api.post<IUserToken, AxiosResponse<IUserToken>>(
    `${LOGIN_URL}`,
    data
  );
  return response;
};

const getUserData = async (): Promise<IUserClientDTO> => {
  const response = await $authApi.get<
    IUserServerDTO,
    AxiosResponse<IUserServerDTO>
  >(`${GET_USER_INFO_URL}`);
  const userData = transformUserDataFromServerToClient(response.data);
  return userData;
};

const isAuth = async (): Promise<boolean> => {
  try {
    await getUserData();
    return true;
  } catch (e) {
    return false;
  }
};

export { createUser, loginUser, getUserData, isAuth };
