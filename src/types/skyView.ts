import { IMoon, MoonCoordinates } from './moon';
import { IPlanet, PlanetCoordinates } from './planet';
import { IStar, StarCoordinates } from './star';
import { ISun, SunCoordinates } from './sun';

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
export type Coordinates =
  | MoonCoordinates
  | PlanetCoordinates
  | StarCoordinates
  | SunCoordinates;

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
