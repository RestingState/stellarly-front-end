import { FC, useState } from 'react';
// Styles
import {
  Wrapper,
  SocailMediaContainer,
  Title,
  Account
} from './SocialMedia.styles';

interface IBaseSocialMediaAccount {
  id: number;
  name: string;
}

interface IEmail extends IBaseSocialMediaAccount {}

interface IInstagram extends IBaseSocialMediaAccount {}

interface ITelegram extends IBaseSocialMediaAccount {}

const SocialMedia: FC = () => {
  const [emails, setEmails] = useState<IEmail[]>([
    { id: 1, name: 'boop@com' },
    { id: 2, name: 'boop@com' }
  ]);
  const [instagrams, setInstagrams] = useState<IInstagram[]>([
    { id: 1, name: 'boop' },
    { id: 2, name: 'boop' }
  ]);
  const [telegrams, setTelegrams] = useState<ITelegram[]>([
    { id: 1, name: '@boop' },
    { id: 2, name: '@boop' },
    { id: 3, name: '@boop' },
    { id: 4, name: '@boop' }
  ]);

  return (
    <Wrapper>
      <SocailMediaContainer>
        <Title>E-mail:</Title>
        {emails?.map((email) => (
          <Account key={email.id}>{email.name}</Account>
        ))}
      </SocailMediaContainer>
      <SocailMediaContainer>
        <Title>Instagram:</Title>
        {instagrams?.map((instagram) => (
          <Account key={instagram.id}>{instagram.name}</Account>
        ))}
      </SocailMediaContainer>
      <SocailMediaContainer>
        <Title>Telegram:</Title>
        {telegrams?.map((telegram) => (
          <Account key={telegram.id}>{telegram.name}</Account>
        ))}
      </SocailMediaContainer>
    </Wrapper>
  );
};

export default SocialMedia;
