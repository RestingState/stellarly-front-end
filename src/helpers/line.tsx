import { drawLine } from './drawing';
import {
  transformIntoRadians,
  getVectorInCartesian,
  isVisible,
  xAxisProjection,
  yAxisProjection,
  determineScreenLocation,
  getDistance
} from './calculation';

import { ISkyViewParams } from '../types/skyView';

const points_per_line = 36;
var points: number[][][] = [];
var temp: number[][] = [];

for (let i = 0; i < 360; i += 360 / points_per_line) {
  // temp.push([i, 30]);
  // temp.push([i, 60]);
  temp.push([i, 90]);
  // temp.push([i, 120]);
  // temp.push([i, 150]);
}
points.push(temp);

function renderLines(params: ISkyViewParams) {

  for (let i = 0; i < points.length; i++) {
    let current_points: number[][] = [];
    for (let j = 0; j < points[i].length; j++) {

      const { x: x_v, y: y_v, z: z_v } = getVectorInCartesian((params.gamma * Math.PI) / 180, (params.theta * Math.PI) / 180); // view vector in cartesian
      const { x: x_s, y: y_s, z: z_s } = getVectorInCartesian((points[i][j][0] * Math.PI) / 180, (points[i][j][1] * Math.PI) / 180); // star vector in cartesian

      if (!isVisible(x_v, y_v, z_v, x_s, y_s, z_s)) continue;

      // projection on x-axis of the screen (sort of)
      const { x_i, y_i } = xAxisProjection(x_v, y_v, x_s, y_s);

      //projection on y-axis of the screen (sort of)
      const { x_j, y_j, z_j } = yAxisProjection(x_v, y_v, z_v, x_s, y_s, z_s);

      // check if should render in left or right side of the screen and up or down
      const { lr, ud } = determineScreenLocation(x_v, y_v, x_i, y_i, z_j);

      let x_p = (((x_i ** 2 + y_i ** 2) ** 0.5 * params.screen_width) / 2) * params.zoom_level * lr + params.screen_width / 2;
      let y_p = ((x_j ** 2 + y_j ** 2 + z_j ** 2) ** 0.5 * params.zoom_level * ud * params.screen_width) / 2 + params.screen_height / 2;

      current_points.push([x_p, y_p]);

    }

    // current_points.sort(function(a: number[], b: number[]) {return a[0] - b[0];});

    // for (let i = 0; i < current_points.length - 1; i++){
    //   if (getDistance(current_points[i][0], current_points[i+1][0], current_points[i][1], current_points[i+1][1]) > 700 * params.zoom_level){
    //     current_points.splice(i);
    //   }
    // }
    drawLine(params, current_points);

  }

}

// function drawStar(
//   params: ISkyViewParams,
//   gamma_v: number,
//   theta_v: number,
//   gamma_s: number,
//   theta_s: number,
//   radius: number
// ) {
//   const { x: x_v, y: y_v, z: z_v } = getVectorInCartesian(gamma_v, theta_v); // view vector in cartesian
//   const { x: x_s, y: y_s, z: z_s } = getVectorInCartesian(gamma_s, theta_s); // star vector in cartesian

//   if (!isVisible(x_v, y_v, z_v, x_s, y_s, z_s)) return;

//   // projection on x-axis of the screen (sort of)
//   const { x_i, y_i } = xAxisProjection(x_v, y_v, x_s, y_s);

//   //projection on y-axis of the screen (sort of)
//   const { x_j, y_j, z_j } = yAxisProjection(x_v, y_v, z_v, x_s, y_s, z_s);

//   // check if should render in left or right side of the screen and up or down
//   const { lr, ud } = determineScreenLocation(x_v, y_v, x_i, y_i, z_j);

//   const color = '#ffffff';
//   // actual drawing
//   drawCircle(params, x_i, y_i, x_j, y_j, z_j, lr, ud, radius, color);
// }

export { renderLines };
