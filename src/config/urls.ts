const API_URL = 'https://stellarly-back-end.herokuapp.com';
const API_KEY = process.env.REACT_APP_API_KEY;

const REGISTRATION_URL = `${API_URL}/user?key=${API_KEY}`;
const LOGIN_URL = `${API_URL}/user/login?key=${API_KEY}`;
const GET_USER_INFO_URL = `${API_URL}/user?key=${API_KEY}`;
const FETCH_STARS_URL = `${API_URL}/stars?key=${API_KEY}`;
const FETCH_SATELLITES_URL = `${API_URL}/satellites?key=${API_KEY}`;
const FETCH_PLANETS_URL = `${API_URL}/planets?key=${API_KEY}`;
const FETCH_MOON_URL = `${API_URL}/Moon?key=${API_KEY}`;
const FETCH_SUN_URL = `${API_URL}/Sun?key=${API_KEY}`;
const FETCH_WEATHER_URL = `${API_URL}/weather?key=${API_KEY}`;
const FETCH_CITIES_URL = `${API_URL}/cities?key=${API_KEY}`;
const SEND_FEEDBACK_URL = `${API_URL}/feedback?key=${API_KEY}`;
const GET_CITY_NAME_BY_ID_FUNC_URL = (id: number) => {
  return `${API_URL}/cities/${id}?key=${API_KEY}`;
};

export {
  API_URL,
  REGISTRATION_URL,
  LOGIN_URL,
  GET_USER_INFO_URL,
  FETCH_STARS_URL,
  FETCH_SATELLITES_URL,
  FETCH_PLANETS_URL,
  FETCH_MOON_URL,
  FETCH_SUN_URL,
  FETCH_WEATHER_URL,
  FETCH_CITIES_URL,
  SEND_FEEDBACK_URL,
  GET_CITY_NAME_BY_ID_FUNC_URL
};
