import React from 'react';
// Styles
import { Wrapper, CopyrightSign } from './Footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <CopyrightSign>STELLARLY &copy; 2021</CopyrightSign>
      <ul>
        <li>TWITTER</li>
        <li>YOUTUBE</li>
        <li>INSTAGRAM</li>
        <li>FLICKR</li>
        <li>LINKEDIN</li>
        <li>PRIVACY POLICY</li>
      </ul>
    </Wrapper>
  );
};

export default Footer;
