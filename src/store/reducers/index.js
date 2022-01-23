import { combineReducers } from 'redux';
import { mapReducer } from './mapReducer';
import { starReducer } from './starReducer';
import { satelliteReducer } from './satelliteReducer';

export const rootReducer = combineReducers({
  map: mapReducer,
  star: starReducer,
  satellite: satelliteReducer
});
