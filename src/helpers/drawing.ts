// Types
import { ISkyViewParams } from '../types/skyView';

function blackout(params: ISkyViewParams) {
  params.context!.fillStyle = 'black';
  params.context!.fillRect(0, 0, params.screen_width, params.screen_height);
}

function drawCircle(
  params: ISkyViewParams,
  x_i: number,
  y_i: number,
  x_j: number,
  y_j: number,
  z_j: number,
  lr: number,
  ud: number,
  radius: number,
  color: string
) {
  params.context!.fillStyle = color; // should be changeable
  params.context!.beginPath();
  params.context!.arc(
    (((x_i ** 2 + y_i ** 2) ** 0.5 * params.screen_width) / 2) *
      params.zoom_level *
      lr +
      params.screen_width / 2,
    ((x_j ** 2 + y_j ** 2 + z_j ** 2) ** 0.5 *
      params.zoom_level *
      ud *
      params.screen_width) /
      2 +
      params.screen_height / 2,
    radius,
    0,
    2 * Math.PI
  );
  params.context!.fill();
}

export { blackout, drawCircle };
