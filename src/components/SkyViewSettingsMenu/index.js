import React, { useState } from "react";
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
  const [data, setData] = useState({ x: 0, y: 0, latitude: 0, longitude: 0 });

  const handleData = () => {};

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
            <Input type={"text"}></Input>
          </Segment>
          <Segment>
            <InputName>Latitude:</InputName>
            <Input type={"text"}></Input>
          </Segment>
        </Section>
        <Section>
          <SectionTitle>View direction</SectionTitle>
          <Segment>
            <InputName>Right ascension:</InputName>
            <Input type={"text"}></Input>
          </Segment>
          <Segment>
            <InputName>Declination:</InputName>
            <Input type={"text"}></Input>
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
