import React from 'react';
import { Link } from 'react-router-dom';

import { Container, HeaderLink, Logo } from './Header.style';
import { defaultSubReddit } from '../../config';

function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <HeaderLink to={`/search/${defaultSubReddit}`}>Search</HeaderLink>
        <HeaderLink to="/#how-it-works">How it works</HeaderLink>
        <HeaderLink to="/#about">About</HeaderLink>
      </nav>
    </Container>
  );
}

export default Header;
