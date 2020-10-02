import React from 'react';
import { Link } from 'react-router-dom';

import { Container, HeaderLink, Logo } from './Header.style';
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
      <nav>
        <HeaderLink to={`/search/${defaultSubReddit}`} onClick={handleClick}>Search</HeaderLink>
        <HeaderLink smooth to="/#how-it-works">How it works</HeaderLink>
        <HeaderLink smooth to="/#about">About</HeaderLink>
      </nav>
    </Container>
  );
}

export default Header;
