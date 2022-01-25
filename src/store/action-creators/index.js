import * as MapActionCreators from './map';
import * as StarActionCreators from './star';
import * as SatelliteActionCreators from './satellite';
import * as PlanetActionCreators from './planet';
import * as MoonActionCreators from './moon';
import * as SunActionCreators from './sun';

export default {
  ...MapActionCreators,
  ...StarActionCreators,
  ...SatelliteActionCreators,
  ...PlanetActionCreators,
  ...MoonActionCreators,
  ...SunActionCreators
};
