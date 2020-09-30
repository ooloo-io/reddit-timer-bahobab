import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import { ReactComponent as UnstyledLogo } from '../../assets/logo.svg';

export const Container = styled.header`
  width: 100%;
  height: ${(props) => props.theme.size.headerHeight};
  margin: 0 auto;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(UnstyledLogo)`
  display: block;
  width: 150px;
  height: 36px;
`;

export const HeaderLink = styled(Link)`
  margin-left: 26px;
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark}
`;

/* export const HashLink = styled.a`
  margin-left: 26px;
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark}
`; */
