import styled from 'styled-components';

export const ColorSchemeWrapper = styled.div`
  height: ${(props) => props.theme.size.heatmap.headerHeight}px;
  width: 100%;
  max-width: 154px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ColorSchemeTitle = styled.p`
  width: 100%;
  max-width: 154px;
  margin: 0;
  padding: 0;
  color: red;
  font-size: ${(props) => props.theme.font.size.small};
  text-align: center
`;

export const ColorScheme = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: ${(props) => props.theme.font.size.small};
`;

export const Input = styled.input`
  cursor: pointer;
`;

export const Label = styled.label`
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    padding: 2px 5px;
    border-radius: 5px;
    background-color: red;
    color: #ffffff;
  }
`;
