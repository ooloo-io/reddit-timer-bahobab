import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: ${(props) => props.theme.font.size.small};
  color: red;
`;

export const Input = styled.input`
  margin-left: 10px;

`;
