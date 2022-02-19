import { IMoon, MoonCoordinatesInDecart } from './moon';
import { IPlanet, PlanetCoordinatesInDecart } from './planet';
import { IStar, StarCoordinatesInDecart } from './star';
import { ISun, SunCoordinatesInDecart } from './sun';

export type Context = CanvasRenderingContext2D | null;
export type IsMoving = boolean;
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

export interface ISkyViewParams {
  context: Context;
  is_moving: IsMoving;
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
