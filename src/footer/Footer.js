import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container, FooterLinkRight, FooterLinkLeft, Sign,
} from './Footer.style';

function Footer() {
  return (
    <Container>
      <FooterLinkLeft as="a" href="https://ooloo.io/employers">ooloo.io</FooterLinkLeft>
      <Link to="/">
        <Sign />
      </Link>
      <FooterLinkRight to="/terms">
        Terms & Privacy
      </FooterLinkRight>
    </Container>
  );
}

export default Footer;
