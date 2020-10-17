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
  color: ${(props) => props.theme.color.heatmap.highlight};
  font-weight: bolder;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    padding: 2px 5px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.color.heatmap.highlight};
    color: #ffffff;
  }
`;

export const Input = styled.input`
  margin-left: 10px;
  cursor: pointer;
`;
