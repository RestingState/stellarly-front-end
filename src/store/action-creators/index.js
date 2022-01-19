import * as MapActionCreators from "./map";
import * as StarActionCreators from "./star";
import * as SatelliteActionCreators from "./satellite";

export default {
  ...MapActionCreators,
  ...StarActionCreators,
  ...SatelliteActionCreators,
};
