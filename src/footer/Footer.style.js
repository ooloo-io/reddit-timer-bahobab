import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as UnstyledSign } from '../assets/sign.svg';

export const Container = styled.footer`
  width:100%;
  max-width: 980px;
  height: ${(props) => props.theme.size.footerHeight};
  margin: 0 auto;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
`;

export const Sign = styled(UnstyledSign)`
  display: block;
  width: 32px;
  height: 32px;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
  font-size: ${(props) => props.theme.font.size.small};
  flex: 1;
`;

export const FooterLinkRight = styled(FooterLink)`
  text-align: right;
`;
export const FooterLinkLeft = styled(FooterLink)`
  text-align: left;
`;
