export interface IUserClientDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cityId: string;
  username: string;
}

export interface IUserServerDTO {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  city_id: number;
  username: string;
}

export interface IUserLoginData {
  username: string;
  password: string;
}

export interface IUserToken {
  token: string;
}
