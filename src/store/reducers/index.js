import { combineReducers } from 'redux';
import { mapReducer } from './mapReducer';
import { starReducer } from './starReducer';
import { satelliteReducer } from './satelliteReducer';
import { planetReducer } from './planetReducer';
import { moonReducer } from './moonReducer';
import { sunReducer } from './sunReducer';

export const rootReducer = combineReducers({
  map: mapReducer,
  star: starReducer,
  satellite: satelliteReducer,
  planet: planetReducer,
  moon: moonReducer,
  sun: sunReducer
});
