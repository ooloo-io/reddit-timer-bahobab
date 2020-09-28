import React from 'react';
// import { Link } from 'react-router-dom';

import { Container, FooterLink, Sign } from './Footer.style';

function Footer() {
  return (
    <Container>
      <a href="https://ooloo.io/employers">ooloo.io</a>
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
