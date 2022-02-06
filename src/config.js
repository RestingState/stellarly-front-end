const API_URL = 'http://127.0.0.1:5000';
const API_KEY = 'WIx9fxdc4xc7xbax08x0eTxf7dx9fxc5';

const REGISTRATION_URL = `${API_URL}/user?key=${API_KEY}`;
const LOGIN_URL = `${API_URL}/user/login?key=${API_KEY}`;
const GET_USER_INFO_URL = `${API_URL}/user?key=${API_KEY}`;
const FETCH_STARS_URL = `${API_URL}/stars?key=${API_KEY}`;
const FETCH_SATELLITES_URL = `${API_URL}/satellites?key=${API_KEY}`;
const FETCH_PLANETS_URL = `${API_URL}/planets?key=${API_KEY}`;
const FETCH_MOON_URL = `${API_URL}/Moon?key=${API_KEY}`;
const FETCH_SUN_URL = `${API_URL}/Sun?key=${API_KEY}`;
const FETCH_WEATHER_URL = `${API_URL}/weather?key=${API_KEY}`;

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
  FETCH_WEATHER_URL
};
