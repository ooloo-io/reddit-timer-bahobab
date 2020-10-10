import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Headline = styled.h3`
  text-align: left;
  width: 100%;
  max-width: 786px;
  height: 28px;
  font-family: Bitter;
  font-size: 24px;
  font-weight: normal;
  color: #000000;
`;

export const Table = styled.table`
width: 100%;
max-width: 786px;
`;

export const TableRow = styled.tr`
  width: 786px;
  height: 35px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
`;

export const TH = styled.th`
width: 350px;
height: 18px;
font-family: Montserrat;
font-size: 14px;
font-weight: 500;
color: #000000;
`;
