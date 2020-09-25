import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../img/logo.svg';

function Header() {
  return (
    <StyledHeader>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <p>reddit timer</p>
        </div>
        <div className="nav-wrapper">
          <ul className="nav">
            <li><Link exact to="/search">Search</Link></li>
            <li><Link exact to="#how-it-works">How it works</Link></li>
            <li><Link exact to="#about">About</Link></li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  .navbar{
    height: 60px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }

  .logo {
    padding-left: 10px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .logo img {
    width: 40px;
  }

.nav {
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
}

.nav li {
  list-style: none;
  padding-right: 10px;
}

.nav li a{
  text-decoration: none;
}

`;
