import React from "react";
// Styles
import {
  Wrapper,
  Title,
  AboutStellarlyContent,
  Text,
  Image,
  AboutTeamContent,
  TeamMember,
} from "./AboutUsSection.styles";

const AboutUsSection = () => {
  return (
    <Wrapper>
      <Title position="left">
        <span>About Stellarly</span>
      </Title>
      <AboutStellarlyContent>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Image
          src={require("../../images/alpha_centauri.jpg")}
          alt="object image"
        />
      </AboutStellarlyContent>
      <Title>
        <span>Our team</span>
      </Title>
      <AboutTeamContent>
        <div>
          <TeamMember>Boop</TeamMember>
          <TeamMember>Boop</TeamMember>
          <TeamMember>Boop</TeamMember>
          <TeamMember>Boop</TeamMember>
        </div>
        <div>
          <TeamMember>Boop</TeamMember>
          <TeamMember>Boop</TeamMember>
          <TeamMember>Boop</TeamMember>
        </div>
      </AboutTeamContent>
    </Wrapper>
  );
};

export default AboutUsSection;
