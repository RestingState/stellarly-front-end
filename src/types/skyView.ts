import {
  IMoon,
  MoonCoordinatesInDecart,
  MoonCoordinatesInSphere
} from './moon';
import {
  IPlanet,
  PlanetCoordinatesInDecart,
  PlanetCoordinatesInSphere
} from './planet';
import {
  IStar,
  StarCoordinatesInDecart,
  StarCoordinatesInSphere
} from './star';
import { ISun, SunCoordinatesInDecart, SunCoordinatesInSphere } from './sun';

export type Context = CanvasRenderingContext2D | null;
export type IsMoving = boolean;
export type HasMoved = boolean;
export type LastX = number;
export type LastY = number;
export type Gamma = number;
export type Theta = number;
export type ScreenWidth = number;
export type ScreenHeight = number;
export type ZoomLevel = number;
export type RotationSpeed = number;
export type CoordinatesInDecart =
  | MoonCoordinatesInDecart
  | PlanetCoordinatesInDecart
  | StarCoordinatesInDecart
  | SunCoordinatesInDecart;
export type CoordinatesInSphere =
  | MoonCoordinatesInSphere
  | PlanetCoordinatesInSphere
  | StarCoordinatesInSphere
  | SunCoordinatesInSphere;

export interface ISkyViewParams {
  context: Context;
  is_moving: IsMoving;
  has_moved: HasMoved;
  last_x: LastX;
  last_y: LastY;
  gamma: Gamma;
  theta: Theta;
  screen_width: ScreenWidth;
  screen_height: ScreenHeight;
  zoom_level: ZoomLevel;
  rotation_speed: RotationSpeed;
  planets: IPlanet[];
  stars: IStar[];
  moon: IMoon;
  sun: ISun;
}

export interface ISkyViewInfoMenuData {
  type: string;
  name: string;
  mass: string;
  radius: string;
  luminosity: string;
  temperature: string;
  parallax: string;
  coordinates: CoordinatesInSphere;
}

export const defaultType = 'undefined';
export const defaultName = 'undefined';
export const defaultMass = 'undefined';
export const defaultRadius = 'undefined';
export const defaultLuminosity = 'undefined';
export const defaultTemperature = 'undefined';
export const defaultParallax = 'undefined';

export const defaultSkyViewInfoMenuData: ISkyViewInfoMenuData = {
  type: defaultType,
  name: defaultName,
  mass: defaultMass,
  radius: defaultRadius,
  luminosity: defaultLuminosity,
  temperature: defaultTemperature,
  parallax: defaultParallax,
  coordinates: [0, 0, 0]
};
