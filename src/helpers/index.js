import { renderStars } from './star';
import { blackout } from './drawing';

function renderMap(params) {
  blackout(params);
  if (params.stars) {
    renderStars(params);
  }
}

export { renderMap };
