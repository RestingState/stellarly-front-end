import React from "react";
// Styles
import { Wrapper, Content, CloseBtn } from "./SkyViewSettingsMenu.styles";

const SkyViewSettingsMenu = ({ active, closeSettingsMenu }) => {
  return (
    <Wrapper active={active}>
      <CloseBtn onClick={closeSettingsMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
      </CloseBtn>
      <Content>
        <h1>Settings Menu</h1>
        <h3>Coordinates:</h3>
        <h3>Latitude:</h3>
        <h3>Longitude:</h3>
      </Content>
    </Wrapper>
  );
};

export default SkyViewSettingsMenu;
