import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useAction";
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
} from "./SkyViewSettingsMenu.styles";
// Components
import ZoomSlider from "../ZoomSlider";
import SkyObjectCheckbox from "../SkyObjectCheckbox";
import SubmitButton from "../SubmitButton";

const SkyViewSettingsMenu = ({ active, closeSettingsMenu }) => {
  const { longitude, latitude, right_ascension, declination } = useSelector(
    (state) => state.map
  );
  const { setLongitude, setLatitude, setRightAscension, setDeclination } =
    useActions();

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
              onChange={(e) => setLongitude(e.target.value)}
              min={0}
              max={180}
              step={0.01}
            />
          </Segment>
          <Segment>
            <InputName>Latitude:</InputName>
            <Input
              type="number"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              min={0}
              max={180}
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
              onChange={(e) => setRightAscension(e.target.value)}
              min={0}
              max={180}
              step={0.01}
            />
          </Segment>
          <Segment>
            <InputName>Declination:</InputName>
            <Input
              type="number"
              value={declination}
              onChange={(e) => setDeclination(e.target.value)}
              min={0}
              max={180}
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
            <Input type={"text"}></Input>
            <InputName>Object color:</InputName>
            <Input type={"text"}></Input>
            <SubmitButton />
          </SubSection>
        </CompoundSection>
      </Content>
    </Wrapper>
  );
};

export default SkyViewSettingsMenu;
