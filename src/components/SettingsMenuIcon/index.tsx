import { FC } from 'react';
// Styles
import { Icon } from './SettingsMenuIcon.styles';

interface SettingsMenuIconProps {
  active: boolean;
  openSettingsMenu: () => void;
}

const SettingsMenuIcon: FC<SettingsMenuIconProps> = ({
  active,
  openSettingsMenu
}) => {
  return (
    <Icon className="fas fa-cog" active={active} onClick={openSettingsMenu} />
  );
};

export default SettingsMenuIcon;
