import { FC, MutableRefObject } from 'react';
// Styles
import {
  Wrapper,
  Header,
  Title,
  CloseBtn,
  Content,
  Section,
  CompoundSection,
  Segment,
  SectionTitle,
  InputName,
  Input,
  SubSection,
  BtnWrapper
} from './SkyViewSettingsMenu.styles';
// Components
import ZoomSlider from '../ZoomSlider';
import SkyObjectCheckbox from '../SkyObjectCheckbox';
import SubmitButton from '../SubmitButton';
// Hooks
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
// Helpers
import { renderMap } from '../../helpers';
// Types
import { ISkyViewParams } from '../../types/skyView';

interface SkyViewSettingsMenuProps {
  active: boolean;
  closeSettingsMenu: () => void;
  paramsRef: MutableRefObject<ISkyViewParams>;
}

const SkyViewSettingsMenu: FC<SkyViewSettingsMenuProps> = ({
  active,
  closeSettingsMenu,
  paramsRef
}) => {
  const { longitude, latitude, right_ascension, declination } =
    useTypedSelector((state) => state.map);
  const { setLongitude, setLatitude, setRightAscension, setDeclination } =
    useActions();

  const handleLongitudeChange = (e: any) => {
    setLongitude(parseFloat(e.target.value));
  };

  const handleLatitudeChange = (e: any) => {
    setLatitude(parseFloat(e.target.value));
  };

  const handleRightAscensionChange = (e: any) => {
    const gamma = parseFloat(e.target.value);
    setRightAscension(gamma);
    paramsRef.current.gamma = gamma;
    renderMap(paramsRef.current);
  };

  const handleDeclinationChange = (e: any) => {
    const theta = parseFloat(e.target.value);
    setDeclination(theta);
    paramsRef.current.theta = theta;
    renderMap(paramsRef.current);
  };

  return (
    <Wrapper active={active}>
      <Header>
        <CloseBtn className="fas fa-arrow-left" onClick={closeSettingsMenu} />
        <Title>Settings Panel</Title>
      </Header>
      <Content>
        <Section>
          <SectionTitle>Your position</SectionTitle>
          <Segment>
            <InputName>Longitude:</InputName>
            <Input
              type="number"
              value={longitude}
              onChange={handleLongitudeChange}
              min={0}
              max={360}
              step={0.01}
            />
          </Segment>
          <Segment>
            <InputName>Latitude:</InputName>
            <Input
              type="number"
              value={latitude}
              onChange={handleLatitudeChange}
              min={0}
              max={360}
              step={0.01}
            />
          </Segment>
        </Section>
        <Section>
          <SectionTitle>View direction</SectionTitle>
          <Segment>
            <InputName>Right ascension:</InputName>
            <Input
              type="number"
              value={right_ascension}
              onChange={handleRightAscensionChange}
              min={0}
              max={360}
              step={0.01}
            />
          </Segment>
          <Segment>
            <InputName>Declination:</InputName>
            <Input
              type="number"
              value={declination}
              onChange={handleDeclinationChange}
              min={0}
              max={360}
              step={0.01}
            />
          </Segment>
        </Section>
        <Section>
          <SectionTitle>Zoom level</SectionTitle>
          <ZoomSlider />
        </Section>
        <CompoundSection>
          <SubSection>
            <SectionTitle>Show objects:</SectionTitle>
            <SkyObjectCheckbox />
          </SubSection>
          <SubSection>
            <SectionTitle>Filters:</SectionTitle>
            <InputName>Object area on the map:</InputName>
            <Input type={'text'}></Input>
            <InputName>Object color:</InputName>
            <Input type={'text'}></Input>
            <BtnWrapper>
              <SubmitButton />
            </BtnWrapper>
          </SubSection>
        </CompoundSection>
      </Content>
    </Wrapper>
  );
};

export default SkyViewSettingsMenu;
