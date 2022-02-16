import { FC } from 'react';
// Styles
import { Wrapper } from './Toggle.styles';

interface ToggleProps {
  active: boolean;
  handleOpen: () => void;
}

const Toggle: FC<ToggleProps> = ({ active, handleOpen }) => {
  return (
    <Wrapper active={active} onClick={handleOpen}>
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </Wrapper>
  );
};

export default Toggle;
