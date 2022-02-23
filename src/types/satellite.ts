export enum SatelliteActionTypes {
  FETCH_SATELLITES = 'FETCH_SATELLITES',
  FETCH_SATELLITES_SUCCESS = 'FETCH_SATELLITES_SUCCESS',
  FETCH_SATELLITES_ERROR = 'FETCH_SATELLITES_ERROR'
}

export type AscendingNodeLongitude = string;
export type AverageAnomaly = string;
export type CallFrequency = string;
export type Eccentricity = string;
export type Inclination = string;
export type NoradId = number;
export type PericenterArgument = string;
export type Satname = string;

export interface ISatelliteServer {
  ascending_node_longitude: AscendingNodeLongitude;
  average_anomaly: AverageAnomaly;
  call_frequency: CallFrequency;
  eccentricity: Eccentricity;
  inclination: Inclination;
  norad_id: NoradId;
  pericenter_argument: PericenterArgument;
  satname: Satname;
}

export interface ISatellite {}
