import React from 'react';
import {
  arrayOf, func, number, shape,
} from 'prop-types';

import {
  Container, TimezoneWrapper, Timezone,
} from './Heatmap.style';
import HeatmapRow from './HeatmapRow';
import HeatmapHeaderRow from './HeatmapHeaderRow';

function Heatmap({
  postsPerDay, onClickHour, selectedDayAndHour, showPostsTable,
}) {
  
  return (
    <>
      <Container data-testid="heatmap">
        <HeatmapHeaderRow />
        {
          postsPerDay.map((postsPerHour, day) => (
            <HeatmapRow
              // eslint-disable-next-line react/no-array-index-key
              key={day}
              day={day}
              postsPerHour={postsPerHour}
              onClickHour={onClickHour}
              selectedHour={selectedDayAndHour.day === day ? selectedDayAndHour.hour : null}
              showPostsTable={showPostsTable}
            />
          ))
        }
      </Container>

      <TimezoneWrapper>
        All times are shown in your timezone:
        <Timezone>{Intl.DateTimeFormat().resolvedOptions().timeZone}</Timezone>
      </TimezoneWrapper>
    </>
  );
}

Heatmap.propTypes = {
  postsPerDay: arrayOf(arrayOf(number)).isRequired,
  onClickHour: func.isRequired,
  selectedDayAndHour: shape({
    day: number,
    hour: number,
  }).isRequired,
  
  showPostsTable: func.isRequired,

};

export default Heatmap;
