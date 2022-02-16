import { FC, useState } from 'react';
// Styles
import { Wrapper, NavPanel } from './SkyView.styles';
// Components
import SkyViewMap from '../SkyViewMap';
import SettingsMenuIcon from '../SettingsMenuIcon';
import Toggle from '../Toggle';
import SkyViewInfoMenu from '../SkyViewInfoMenu';
import SkyViewSettingsMenu from '../SkyViewSettingsMenu';

const SkyView: FC = () => {
  const [isActiveInfoMenu, setIsActiveInfoMenu] = useState(false);
  const [isActiveSettingsMenu, setIsActiveSettingsMenu] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleInfoMenu = (bool: boolean) => {
    setIsActiveInfoMenu(bool);
    setIsActiveMenu(bool);
  };

  const handleSettingsMenu = (bool: boolean) => {
    setIsActiveSettingsMenu(bool);
    setIsActiveMenu(bool);
  };

  return (
    <Wrapper>
      <NavPanel>
        <Toggle active={isActiveMenu} handleOpen={() => handleInfoMenu(true)} />
        <SettingsMenuIcon
          active={isActiveMenu}
          openSettingsMenu={() => handleSettingsMenu(true)}
        />
      </NavPanel>
      <SkyViewInfoMenu
        active={isActiveInfoMenu}
        closeSettingsMenu={() => handleInfoMenu(false)}
      />
      <SkyViewSettingsMenu
        active={isActiveSettingsMenu}
        closeSettingsMenu={() => handleSettingsMenu(false)}
      />
      <SkyViewMap />
    </Wrapper>
  );
};

export default SkyView;
