// Styles
import { Icon } from './SettingsMenuIcon.styles';

const SettingsMenuIcon = ({ active, openSettingsMenu }) => {
  return (
    <Icon className="fas fa-cog" active={active} onClick={openSettingsMenu} />
  );
};

export default SettingsMenuIcon;
