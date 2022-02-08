import React from 'react';
// Styles
import { Wrapper } from './Toggle.styles';

const Toggle = ({ active, openSettingsMenu }) => {
  return (
    <Wrapper active={active} onClick={openSettingsMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </Wrapper>
  );
};

export default Toggle;
