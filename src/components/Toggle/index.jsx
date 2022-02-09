// Styles
import { Wrapper } from './Toggle.styles';

const Toggle = ({ active, openSettingsMenu }) => {
  return (
    <Wrapper active={active} onClick={openSettingsMenu}>
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </Wrapper>
  );
};

export default Toggle;
