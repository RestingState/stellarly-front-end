import React from 'react';
// Styles
import { Wrapper, CloseBtn, Content } from './SkyViewSettingsMenu.styles';
// Images
import CloseBtnImg from '../../images/close_btn_image.svg';

const SkyViewSettingsMenu = ({ active, closeSettingsMenu }) => {
  return (
    <Wrapper active={active}>
      <CloseBtn>
        <img
          src={CloseBtnImg}
          alt='closing button image'
          onClick={closeSettingsMenu}
        />
      </CloseBtn>
      <Content>
        <h3>Coordinates:</h3>
        <h3>Latitude:</h3>
        <h3>Longitude:</h3>
      </Content>
    </Wrapper>
  );
};

export default SkyViewSettingsMenu;
