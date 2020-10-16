import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container, HeaderLink, Logo, Nav,
} from './Header.style';
import { defaultSubReddit } from '../../config';

function Header() {
  function handleClick() {
    window.dispatchEvent(new Event('popstate'));
  }

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <Nav>
        <HeaderLink to={`/search/${defaultSubReddit}`} onClick={handleClick}>Search</HeaderLink>
        <HeaderLink smooth to="/#how-it-works">How it works</HeaderLink>
        <HeaderLink smooth to="/#about">About</HeaderLink>
      </Nav>
    </Container>
  );
}

export default Header;
