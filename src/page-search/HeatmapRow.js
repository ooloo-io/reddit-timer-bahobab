import React from 'react';
import { arrayOf, func, number } from 'prop-types';

import { Container, Weekday, Hour } from './HeatmapRow.style';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function HeatmapRow({
  day, postsPerHour, onClickHour, selectedHour, showPostsTable,
}) {
  function handleClick(hour, numPosts) {
    onClickHour({ day, hour, numPosts });
    showPostsTable(numPosts !== 0);
  }
  return (
    <Container>
      <Weekday>{weekdays[day]}</Weekday>
      {
        postsPerHour.map((numPosts, hour) => (
          <Hour
            // eslint-disable-next-line react/no-array-index-key
            key={hour}
            numPosts={numPosts}
            onClick={() => handleClick(hour, numPosts)}
            selected={hour === selectedHour}
            type="button"
          >
            {numPosts}
          </Hour>
        ))
      }
    </Container>
  );
}

HeatmapRow.propTypes = {
  day: number.isRequired,
  postsPerHour: arrayOf(number).isRequired,
  onClickHour: func.isRequired,
  selectedHour: number,
  showPostsTable: func.isRequired,
};

HeatmapRow.defaultProps = {
  selectedHour: null,
};

export default HeatmapRow;
