import { FC } from 'react';
// Styles
import { Wrapper } from './Toggle.styles';

interface ToggleProps {
  active: boolean;
  openSettingsMenu: () => void;
}

const Toggle: FC<ToggleProps> = ({ active, openSettingsMenu }) => {
  return (
    <Wrapper active={active} onClick={openSettingsMenu}>
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </Wrapper>
  );
};

export default Toggle;
