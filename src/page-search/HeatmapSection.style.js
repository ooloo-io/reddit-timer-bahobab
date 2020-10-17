import styled, { keyframes } from 'styled-components';

import { ReactComponent as UnstyledSpinner } from './loading-spinner.svg';

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 56px;
`;

export const ErrorContainer = styled.div`
  padding: 30px;
  color: red;
  font-size: ${(props) => props.theme.font.size.small};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled(UnstyledSpinner)`
  animation: ${rotate} 1.5s linear infinite;
`;

export const Container = styled.div`
width: calc(100% - 40px);
margin: 60px 20px;
@media (max-width: ${(props) => props.theme.size.heatmap.width + 40}px) {
  overflow-x: scroll;
}
`;

export const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.85);
`;

export const CloseModal = styled.span`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 5px;
  text-align: center;
  vertical-align: middle;
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  background-color: teal;

    &:hover,
    &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
    }
`;
