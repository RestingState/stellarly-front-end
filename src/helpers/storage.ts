import { SkyObjects } from '../types/skyObjects';

const isPersistedState = (stateName: SkyObjects) => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
};

export { isPersistedState };
