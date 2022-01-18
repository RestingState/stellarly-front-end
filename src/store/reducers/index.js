import { combineReducers } from "redux";
import { mapReducer } from "./mapReducer";
import { starReducer } from "./starReducer";

export const rootReducer = combineReducers({
  map: mapReducer,
  star: starReducer,
});
