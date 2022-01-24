import * as MapActionCreators from './map';
import * as StarActionCreators from './star';
import * as SatelliteActionCreators from './satellite';
import * as PlanetActionCreators from './planet';

export default {
  ...MapActionCreators,
  ...StarActionCreators,
  ...SatelliteActionCreators,
  ...PlanetActionCreators
};
