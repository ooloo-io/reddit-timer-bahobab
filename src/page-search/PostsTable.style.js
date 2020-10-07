import styled from 'styled-components';

export const WeekRow = styled.tr`
  width: 100%;
z-index: 10;
`;

export const Cell = styled.td`
  /* background-color: ${(props) => props.bg}; */
  height: 40px;
  width: 40px;
  text-align: center;
  /* :hover{
    cursor: pointer;
    border: 1px solid red;
  } */
`;

// merge these 2 td
export const Weekday = styled.td`
  height: 40px;
  width: 154px;
  text-align: center;
  background-color: #1e2537;
`;

export const TimeFrame = styled.thead`
  height: 52px;
  width: 960px;
`;

export const HeatmapTable = styled.table`
  width: 100%;
  border-spacing: 0;
`;
