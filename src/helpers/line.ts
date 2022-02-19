import { drawLine } from './drawing';
import {
  getVectorInCartesian,
  isVisible,
  xAxisProjection,
  yAxisProjection,
  determineScreenLocation
} from './calculation';

import { ISkyViewParams } from '../types/skyView';

const points_per_line = 40;
const line_spacing = 15;
var points: number[][][] = [];

addHorizontalLines();
addVerticalLines();

function renderLines(params: ISkyViewParams) {
  for (let i = 0; i < points.length; i++) {
    let current_points: number[][] = [];
    for (let j = 0; j < points[i].length; j++) {
      const {
        x: x_v,
        y: y_v,
        z: z_v
      } = getVectorInCartesian(
        (params.gamma * Math.PI) / 180,
        (params.theta * Math.PI) / 180
      ); // view vector in cartesian
      const {
        x: x_s,
        y: y_s,
        z: z_s
      } = getVectorInCartesian(
        (points[i][j][0] * Math.PI) / 180,
        (points[i][j][1] * Math.PI) / 180
      ); // star vector in cartesian

      if (!isVisible(x_v, y_v, z_v, x_s, y_s, z_s)) continue;

      // projection on x-axis of the screen (sort of)
      const { x_i, y_i } = xAxisProjection(x_v, y_v, x_s, y_s);

      //projection on y-axis of the screen (sort of)
      const { x_j, y_j, z_j } = yAxisProjection(x_v, y_v, z_v, x_s, y_s, z_s);

      // check if should render in left or right side of the screen and up or down
      const { lr, ud } = determineScreenLocation(x_v, y_v, x_i, y_i, z_j);

      let x_p =
        (((x_i ** 2 + y_i ** 2) ** 0.5 * params.screen_width) / 2) *
          params.zoom_level *
          lr +
        params.screen_width / 2;
      let y_p =
        ((x_j ** 2 + y_j ** 2 + z_j ** 2) ** 0.5 *
          params.zoom_level *
          ud *
          params.screen_width) /
          2 +
        params.screen_height / 2;

      current_points.push([x_p, y_p]);
    }
    drawLine(params, current_points);
  }
}

function addHorizontalLines() {
  for (let j = line_spacing; j < 180; j += line_spacing) {
    var temp: number[][] = [];
    for (let i = 0; i < 360; i += 360 / points_per_line) {
      temp.push([i, j]);
    }
    points.push(temp);
  }
}

function addVerticalLines() {
  for (let j = line_spacing; j <= 180; j += line_spacing) {
    var temp: number[][] = [];
    for (let i = 0; i < 360; i += 360 / points_per_line) {
      temp.push([j, i]);
    }
    points.push(temp);
  }
}

export { renderLines };
