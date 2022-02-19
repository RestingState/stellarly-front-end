import { blackout } from './drawing';
import { renderStars } from './star';
import { renderPlanets } from './planet';
import { renderMoon } from './moon';
import { renderSun } from './sun';
import { renderLines } from './line';

// Types
import { ISkyViewParams } from '../types/skyView';
import { defaultSun } from '../types/sun';
import { defaultMoon } from '../types/moon';

function renderMap(params: ISkyViewParams) {
  blackout(params);
  renderLines(params);
  if (params.stars) {
    renderStars(params);
  }
  if (params.planets) {
    renderPlanets(params);
  }
  if (params.moon) {
    const moonCoordinatesStringify = JSON.stringify(
      params.moon.MoonCoordinatesInDecart
    );
    const moonDefaultCoordinatesStringify = JSON.stringify(
      defaultMoon.MoonCoordinatesInDecart
    );
    if (moonCoordinatesStringify !== moonDefaultCoordinatesStringify) {
      renderMoon(params);
    }
  }
  if (params.sun) {
    const sunCoordinatesStringify = JSON.stringify(
      params.sun.coordinatesInDecart
    );
    const sunDefaultCoordinatesStringify = JSON.stringify(
      defaultSun.coordinatesInDecart
    );
    if (sunCoordinatesStringify !== sunDefaultCoordinatesStringify) {
      renderSun(params);
    }
  }
}

export { renderMap };
