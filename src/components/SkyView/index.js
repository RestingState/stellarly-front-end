import React, { useState } from 'react';
// Styles
import { Wrapper } from './SkyView.styles';
// Components
import SkyViewMap from '../SkyViewMap';
import SkyViewSettingsMenu from '../SkyViewSettingsMenu';
import Toggle from '../Toggle';

const SkyView = () => {
  const [isActiveSettingsMenu, setIsActiveSettingsMenu] = useState(false);

  return (
    <Wrapper>
      <Toggle
        active={isActiveSettingsMenu}
        openSettingsMenu={() => setIsActiveSettingsMenu(true)}
      />
      <SkyViewSettingsMenu
        active={isActiveSettingsMenu}
        closeSettingsMenu={() => setIsActiveSettingsMenu(false)}
      />
      <SkyViewMap />
    </Wrapper>
  );
};

export default SkyView;
