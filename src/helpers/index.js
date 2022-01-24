import { blackout } from './drawing';
import { renderStars } from './star';
import { renderPlanets } from './planet';

function renderMap(params) {
  blackout(params);
  if (params.stars) {
    renderStars(params);
  }
  if (params.planets) {
    renderPlanets(params);
  }
}

export { renderMap };
