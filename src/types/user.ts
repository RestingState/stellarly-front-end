export interface IUserClientDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cityId: number;
  username: string;
  cityName?: string;
}

export interface IUserServerDTO {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  city_id: number;
  username: string;
}

export interface IUserRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  city: string;
}

export interface IUserPersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  city: string;
}

export interface IUserLoginData {
  username: string;
  password: string;
}

export interface IUserToken {
  token: string;
}

export const defaultRegistrationData: IUserRegistrationData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  username: '',
  city: ''
};

export const defaultLoginData: IUserLoginData = {
  username: '',
  password: ''
};
