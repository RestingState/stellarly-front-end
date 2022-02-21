import { FC, useState, useRef, MutableRefObject } from 'react';
// Styles
import { Wrapper, NavPanel } from './SkyView.styles';
// Components
import SkyViewMap from '../SkyViewMap';
import SettingsMenuIcon from '../SettingsMenuIcon';
import Toggle from '../Toggle';
import SkyViewInfoMenu from '../SkyViewInfoMenu';
import SkyViewSettingsMenu from '../SkyViewSettingsMenu';
// Types
import { ISkyViewParams } from '../../types/skyView';

const SkyView: FC = () => {
  const [isActiveInfoMenu, setIsActiveInfoMenu] = useState(false);
  const [isActiveSettingsMenu, setIsActiveSettingsMenu] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const paramsRef = useRef<ISkyViewParams>(
    null
  ) as MutableRefObject<ISkyViewParams>;

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
        paramsRef={paramsRef}
      />
      <SkyViewMap paramsRef={paramsRef} />
    </Wrapper>
  );
};

export default SkyView;
