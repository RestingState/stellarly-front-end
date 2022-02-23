import { IStar } from './star';
import { IPlanet } from './planet';
import { IMoon } from './moon';
import { ISun } from './sun';

export enum SkyObjectsTypes {
  stars = 'stars',
  planets = 'planets',
  moon = 'moon',
  sun = 'sun'
}

export type SkyObjects =
  | SkyObjectsTypes.stars
  | SkyObjectsTypes.planets
  | SkyObjectsTypes.moon
  | SkyObjectsTypes.sun;
export type SkyObjectsData = IStar[] | IPlanet[] | IMoon | ISun;
