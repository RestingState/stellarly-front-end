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

const SkyViewInfoMenu = ({ active, closeSettingsMenu }) => {
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
            <span>Object type</span>
            <span>Object name</span>
          </div>
        </Description>
        <Properties>
          <div>
            <span>Mass:</span>
            <span>Radius:</span>
            <span>Density:</span>
            <span>Temperature:</span>
            <span>Distance:</span>
          </div>
          <div>
            <span>0.0</span>
            <span>0.0</span>
            <span>0.0</span>
            <span>0.0</span>
            <span>0.0</span>
          </div>
        </Properties>
      </Content>
    </Wrapper>
  );
};

export default SkyViewInfoMenu;
