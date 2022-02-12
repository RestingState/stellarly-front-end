import { FC } from 'react';
// Styles
import { Wrapper, CopyrightSign } from './Footer.styles';

const Footer: FC = () => {
  const links = [
    { id: 1, name: 'Twitter' },
    { id: 2, name: 'Youtube' },
    { id: 3, name: 'Instagram' },
    { id: 4, name: 'Flickr' },
    { id: 5, name: 'Linkedin' },
    { id: 6, name: 'Privacy policy' }
  ];

  return (
    <Wrapper>
      <CopyrightSign>STELLARLY &copy; 2021</CopyrightSign>
      <ul>
        {links.map((link) => (
          <li key={link.id}>{link.name}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Footer;
