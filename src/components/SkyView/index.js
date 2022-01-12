import React, { useEffect, useState } from "react";
// Styles
import { Wrapper, NavPanel } from "./SkyView.styles";
// Components
import SkyViewMap from "../SkyViewMap";
import SettingsMenuIcon from "../SettingsMenuIcon";
import Toggle from "../Toggle";
import SkyViewInfoMenu from "../SkyViewInfoMenu";
import SkyViewSettingsMenu from "../SkyViewSettingsMenu";
// API
import fetchStars from "../../api/starsAPI";
import fetchSatellites from "../../api/satellitesAPI";

const SkyView = () => {
  const [isActiveInfoMenu, setIsActiveInfoMenu] = useState(false);
  const [isActiveSettingsMenu, setIsActiveSettingsMenu] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleInfoMenu = (bool) => {
    setIsActiveInfoMenu(bool);
    setIsActiveMenu(bool);
  };

  const handleSettingsMenu = (bool) => {
    setIsActiveSettingsMenu(bool);
    setIsActiveMenu(bool);
  };

  useEffect(() => {
    const getStars = async () => {
      try {
        const response = await fetchStars();
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    const getSatellites = async () => {
      try {
        const response = await fetchSatellites();
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    getStars();
    getSatellites();
  }, []);

  return (
    <Wrapper>
      <NavPanel>
        <Toggle
          active={isActiveMenu}
          openSettingsMenu={() => handleInfoMenu(true)}
        />
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
