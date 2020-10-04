import styled, { keyframes } from 'styled-components';

export const Form = styled.form`
  margin: 20px 0 0;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 18px;
`;

export const Input = styled.input`
  width: 370px;
  height: 36px;
  margin: 0 10px;
  padding: 0 15px;
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.color.dark};
  border: 1px solid ${(props) => props.theme.color.midLight};
`;

export const ResultsWrapper = styled.section`
   /* margin-top: 119px; */
`;

export const Results = styled.div`
margin: 0 auto;
  margin-top: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Image = styled.img`
  width: 71px;
  height: 71px;
  `;

export const ImageWrapper = styled.div`
  display: inline-block;
  padding: 2rem 1rem;
  animation: ${spinner} 1.5s linear infinite;
`;
