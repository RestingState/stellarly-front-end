import { FC } from 'react';
// Styles
import { Wrapper, ToggleWrapper, CloseBtn } from './HeaderToggle.styles';
// Components
import Toggle from '../../Toggle';

interface HeaderToggleProps {
  activeMobileMenu: boolean;
  handleMobileMenu: () => void;
}

const HeaderToggle: FC<HeaderToggleProps> = ({
  activeMobileMenu,
  handleMobileMenu
}) => {
  return (
    <Wrapper>
      <ToggleWrapper>
        <Toggle active={activeMobileMenu} handleOpen={handleMobileMenu} />
      </ToggleWrapper>
      <CloseBtn
        active={activeMobileMenu}
        className="fas fa-times"
        onClick={handleMobileMenu}
      />
    </Wrapper>
  );
};

export default HeaderToggle;
