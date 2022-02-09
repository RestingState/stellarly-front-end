export const transformDataToRegister = (userData) => {
  const userDataDTO = {
    first_name: userData.firstName,
    last_name: userData.lastName,
    email: userData.email,
    password: userData.password,
    city_id: parseInt(userData.cityId),
    username: userData.username
  };
  return userDataDTO;
};
