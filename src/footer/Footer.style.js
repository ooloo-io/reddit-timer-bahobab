import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as UnstyledSign } from '../assets/sign.svg';

export const Container = styled.footer`
  width:1410px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Sign = styled(UnstyledSign)`
  display: block;
  width: 32px;
  height: 32px;
`;

export const FooterLink = styled(Link)`
  height: 18px;
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark}
`;
