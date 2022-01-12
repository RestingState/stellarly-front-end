import { REGISTRATION_URL, LOGIN_URL, GET_USER_INFO_URL } from "../config";
import { $api } from "./axios";

const createUser = async (data) => {
  return await $api.post(`${REGISTRATION_URL}`, data);
};

const loginUser = async (data) => {
  return await $api.post(`${LOGIN_URL}`, data);
};

const getUser = async (token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return await $api.get(`${GET_USER_INFO_URL}`, config);
};

export { createUser, loginUser, getUser };
