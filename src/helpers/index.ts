import { blackout, drawLine } from './drawing';
import { renderStars } from './star';
import { renderPlanets } from './planet';
import { renderMoon } from './moon';
import { renderSun } from './sun';
import { renderLines } from './line';

// Types
import { ISkyViewParams } from '../types/skyView';

function renderMap(params: ISkyViewParams) {
  blackout(params);
  if (params.stars) {
    renderStars(params);
  }
  if (params.planets) {
    renderPlanets(params);
  }
  if (params.moon) {
    if (params.moon.coordinates) {
      renderMoon(params);
    }
  }
  if (params.sun) {
    if (params.sun.coordinates) {
      renderSun(params);
    }
  }
//   renderLines(params);
}

export { renderMap };
