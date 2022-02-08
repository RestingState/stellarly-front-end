// Styles
import { Wrapper, CopyrightSign } from './Footer.styles';

const Footer = () => {
  const links = [
    'TWITTER',
    'YOUTUBE',
    'INSTAGRAM',
    'FLICKR',
    'LINKEDIN',
    'PRIVACY POLICY'
  ];

  return (
    <Wrapper>
      <CopyrightSign>STELLARLY &copy; 2021</CopyrightSign>
      <ul>
        {links.map((link) => (
          <li>{link}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Footer;
