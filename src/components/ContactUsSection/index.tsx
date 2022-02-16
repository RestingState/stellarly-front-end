import { FC } from 'react';
// Styles
import {
  Wrapper,
  Title,
  Description,
  Content,
  MainSection
} from './ContactUsSection.styles';
// Components
import SocialMedia from './SocialMedia';
import ContactForm from './ContactForm';

const ContactUsSection: FC = () => {
  return (
    <Wrapper>
      <Content>
        <Title>Contact us!</Title>
        <Description>
          If you have any questions, problems, suggestions, or just want to say
          hi
        </Description>
        <MainSection>
          <SocialMedia />
          <ContactForm />
        </MainSection>
      </Content>
    </Wrapper>
  );
};

export default ContactUsSection;
