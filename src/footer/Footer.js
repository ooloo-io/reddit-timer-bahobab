import React from 'react';
// import { Link } from 'react-router-dom';

import { Container, FooterLink, Sign } from './Footer.style';

function Footer() {
  return (
    <Container>
      <FooterLink to="https://ooloo.io/employers">ooloo.io</FooterLink>
      <FooterLink to="/">
        <Sign />
      </FooterLink>
      <FooterLink to="/terms">
        Terms & Privacy
      </FooterLink>
    </Container>
  );
}

export default Footer;
