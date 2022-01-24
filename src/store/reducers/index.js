import { combineReducers } from 'redux';
import { mapReducer } from './mapReducer';
import { starReducer } from './starReducer';
import { satelliteReducer } from './satelliteReducer';
import { planetReducer } from './planetReducer';

export const rootReducer = combineReducers({
  map: mapReducer,
  star: starReducer,
  satellite: satelliteReducer,
  planet: planetReducer
});
