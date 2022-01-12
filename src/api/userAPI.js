import { REGISTRATION_URL, LOGIN_URL, GET_USER_INFO_URL } from "../config";
import { $api } from "./axios";

const createUser = async (data) => {
  return await $api.post(`${REGISTRATION_URL}`, data);
};

const loginUser = async (data) => {
  return await $api.get(`${LOGIN_URL}`, data);
};

export { createUser, loginUser };
