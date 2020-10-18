import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  height:36px;
  line-height: 36px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  color: #ffff;
  font-size: ${(props) => props.theme.font.size.small};
  background-color: ${(props) => props.theme.color.primary};
  cursor: pointer;
  text-transform: uppercase;
`;
