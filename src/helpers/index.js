import { blackout } from './drawing';
import { renderStars } from './star';
import { renderPlanets } from './planet';
import { renderMoon } from './moon';
import { renderSun } from './sun';

function renderMap(params) {
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
}

export { renderMap };
