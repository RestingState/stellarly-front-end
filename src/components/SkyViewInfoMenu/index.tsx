import { FC } from 'react';
// Styles
import {
  Wrapper,
  Header,
  Title,
  CloseBtn,
  Content,
  Description,
  Properties
} from './SkyViewInfoMenu.styles';
// Types
import { ISkyViewInfoMenuData } from '../../types/skyView';

interface SkyViewInfoMenuProps {
  active: boolean;
  closeSettingsMenu: () => void;
  data: ISkyViewInfoMenuData;
}

const SkyViewInfoMenu: FC<SkyViewInfoMenuProps> = ({
  active,
  closeSettingsMenu,
  data
}) => {
  return (
    <Wrapper active={active}>
      <Header>
        <CloseBtn className="fas fa-arrow-left" onClick={closeSettingsMenu} />
        <Title>Info panel</Title>
      </Header>
      <Content>
        <Description>
          <div>
            <img
              src={require('../../images/alpha_centauri.jpg')}
              alt="object image"
            />
          </div>
          <div className="names">
            <span>Object type: {data.type}</span>
            <span>Object name: {data.name.toLowerCase()}</span>
          </div>
        </Description>
        <Properties>
          <div>
            <span>Mass:</span>
            <span>Radius:</span>
            <span>Luminosity:</span>
            <span>Temperature:</span>
            <span>Parallax:</span>
            <span>Coordinates:</span>
          </div>
          <div>
            <span>{data.mass}</span>
            <span>{data.radius}</span>
            <span>{data.luminosity}</span>
            <span>{data.temperature}</span>
            <span>{data.parallax}</span>
            <span>
              <div>x: {data.coordinates[0].toFixed(3)}</div>
              <div>y: {data.coordinates[1].toFixed(3)}</div>
            </span>
          </div>
        </Properties>
      </Content>
    </Wrapper>
  );
};

export default SkyViewInfoMenu;
