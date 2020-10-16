import React from 'react';
import {
  arrayOf, func, number, string,
} from 'prop-types';

import propTypes from './propTypes';
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
  day, postsPerHour, onClickHour, selectedHour, bgColorScheme,
}) {
  return (
    <Container>
      <Weekday>{weekdays[day]}</Weekday>
      {
        postsPerHour.map((posts, hour) => {
          const deletedStyle = posts.some((post) => post.author.includes('[deleted]'))
            ? { border: '1px dotted red' }
            : null;

          return (
            <Hour
            // eslint-disable-next-line react/no-array-index-key
              key={hour}
              numPosts={posts.length}
              onClick={() => onClickHour({ day, hour })}
              selected={hour === selectedHour}
              type="button"
              bgColorScheme={bgColorScheme}
              style={deletedStyle}
            >
              {posts.length}
            </Hour>
          );
        })
      }
    </Container>
  );
}

HeatmapRow.propTypes = {
  day: number.isRequired,
  postsPerHour: arrayOf(arrayOf(propTypes.post)).isRequired,
  onClickHour: func.isRequired,
  selectedHour: number,
  bgColorScheme: string,
};

HeatmapRow.defaultProps = {
  selectedHour: null,
  bgColorScheme: 'hourBackground',
};

export default HeatmapRow;
