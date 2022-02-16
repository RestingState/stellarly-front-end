import { FC } from 'react';
// Styles
import {
  Wrapper,
  AboutStellarlyTitle,
  AboutTeamTitle,
  ResourcesTitle,
  AboutStellarlyContent,
  ResourcesContent,
  Text,
  Image,
  AboutTeamContent,
  TeamMember
} from './AboutUsSection.styles';

const AboutUsSection: FC = () => {
  return (
    <Wrapper>
      <AboutStellarlyTitle>
        <span>About Stellarly</span>
      </AboutStellarlyTitle>
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
          src={require('../../images/alpha_centauri.jpg')}
          alt="object image"
        />
      </AboutStellarlyContent>
      <AboutTeamTitle>
        <span>Our team</span>
      </AboutTeamTitle>
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
      <ResourcesTitle>
        <span>Resources</span>
      </ResourcesTitle>
      <ResourcesContent>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ResourcesContent>
    </Wrapper>
  );
};

export default AboutUsSection;
