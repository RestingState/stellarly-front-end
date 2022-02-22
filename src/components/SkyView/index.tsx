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
import {
  ISkyViewParams,
  ISkyViewInfoMenuData,
  defaultSkyViewInfoMenuData
} from '../../types/skyView';

const SkyView: FC = () => {
  const [isActiveInfoMenu, setIsActiveInfoMenu] = useState<boolean>(false);
  const [isActiveSettingsMenu, setIsActiveSettingsMenu] =
    useState<boolean>(false);
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
  const [skyViewInfoMenuData, setSkyViewInfoMenuData] =
    useState<ISkyViewInfoMenuData>(defaultSkyViewInfoMenuData);
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

  const handleInfoMenuData = (data: ISkyViewInfoMenuData) => {
    setSkyViewInfoMenuData(data);
    handleSettingsMenu(false);
    handleInfoMenu(true);
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
        data={skyViewInfoMenuData}
      />
      <SkyViewSettingsMenu
        active={isActiveSettingsMenu}
        closeSettingsMenu={() => handleSettingsMenu(false)}
        paramsRef={paramsRef}
      />
      <SkyViewMap
        paramsRef={paramsRef}
        handleInfoMenuData={handleInfoMenuData}
      />
    </Wrapper>
  );
};

export default SkyView;
