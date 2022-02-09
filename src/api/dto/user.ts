import { IUserClientDTO, IUserServerDTO } from '../../types/user';

export const transformUserDataFromClientToServer = (
  userData: IUserClientDTO
): IUserServerDTO => {
  const userDataDTO: IUserServerDTO = {
    first_name: userData.firstName,
    last_name: userData.lastName,
    email: userData.email,
    password: userData.password,
    city_id: parseInt(userData.cityId),
    username: userData.username
  };
  return userDataDTO;
};

export const transformUserDataFromServerToClient = (
  userData: IUserServerDTO
): IUserClientDTO => {
  const userDataDTO: IUserClientDTO = {
    firstName: userData.first_name,
    lastName: userData.last_name,
    username: userData.username,
    password: userData.password,
    email: userData.email,
    cityId: userData.city_id.toString()
  };
  return userDataDTO;
};
