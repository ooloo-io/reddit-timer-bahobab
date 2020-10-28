import React from 'react';
import {
  arrayOf, func, number, shape,
} from 'prop-types';

import propTypes from './propTypes';
import {
  Container, TimezoneWrapper, Timezone,
} from './Heatmap.style';
import HeatmapRow from './HeatmapRow';
import HeatmapHeaderRow from './HeatmapHeaderRow';
import BgColorScheme from './BgColorScheme';

function Heatmap({
  postsPerDay, onClickHour, selectedDayAndHour,
}) {
  const [backgroundColorCheme, setBackgroundColorCheme] = React.useState('hourBackgroundDefault');

  return (
    <>
      <Container data-testid="heatmap">
        <div style={{ height: '52px', display: 'flex' }}>
          <BgColorScheme onBgColorSelect={setBackgroundColorCheme} />
          <HeatmapHeaderRow />
        </div>
        {
          postsPerDay.map((postsPerHour, day) => (
            <HeatmapRow
              // eslint-disable-next-line react/no-array-index-key
              key={day}
              day={day}
              postsPerHour={postsPerHour}
              onClickHour={onClickHour}
              selectedHour={selectedDayAndHour.day === day ? selectedDayAndHour.hour : null}
              bgColorScheme={backgroundColorCheme}
            />
          ))
        }
      </Container>

      <TimezoneWrapper>
        All times are shown in your timezone:
        <Timezone title="your timezone">{Intl.DateTimeFormat().resolvedOptions().timeZone}</Timezone>
      </TimezoneWrapper>
    </>
  );
}

Heatmap.propTypes = {
  postsPerDay: arrayOf(arrayOf(arrayOf(propTypes.post))).isRequired,
  onClickHour: func.isRequired,
  selectedDayAndHour: shape({
    day: number,
    hour: number,
  }).isRequired,
};

export default Heatmap;
