import styled from 'styled-components';

import { ReactComponent as UnstyledImage } from '../assets/table.svg';

export const HeroSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Heatmap = styled(UnstyledImage)`
  width: 1114px;
  height: 332px;
  object-fit: contain;
`;
