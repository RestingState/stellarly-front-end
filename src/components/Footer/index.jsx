// Styles
import { Wrapper, CopyrightSign } from './Footer.styles';

const Footer = () => {
  const links = [
    { id: 1, name: 'TWITTER' },
    { id: 2, name: 'YOUTUBE' },
    { id: 3, name: 'INSTAGRAM' },
    { id: 4, name: 'FLICKR' },
    { id: 5, name: 'LINKEDIN' },
    { id: 6, name: 'PRIVACY POLICY' }
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
