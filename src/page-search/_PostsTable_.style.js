import styled from 'styled-components';

export const WeekRow = styled.tr`
  width: 100%;
`;

export const Cell = styled.td`
  /* background-color: ${(props) => props.bg}; */
  height: 40px;
  width: 40px;
  text-align: center;
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
export const TimeSliceWrapper = styled.div`
  width: 960px;
  height: 52px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  border: none;
  background-image: linear-gradient(to bottom, #fefefe, #e9e9e9);
`;

export const TimeSlice = styled.span`
  height: 18px;
  width: 80px;
  font-family: Montserrat;
  font-size: 14px;
  text-align: center;
  font-weight: 500;
`;
export const HeatmapTable = styled.table`
  width: 100%;
  border-spacing: 0;
`;
