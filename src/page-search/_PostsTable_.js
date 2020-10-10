import React from 'react';
import { array } from 'prop-types';

import CellWrapper from './CellWrapper';

import { mapWeekday, getUserTimeZone, postsTimeSlots } from '../config';
import {
  WeekRow, Weekday, TimeFrame, HeatmapTable, TimeSlice, TimeSliceWrapper,
} from './_PostsTable_.style';

function PostsTable({ posts }) {
  // let myHeatmap;

  const postsPerHourPerDay = new Array(7)
    .fill([])
    .map(() => new Array(24)
      .fill([])
      .map(() => []));

  function getDayTimeFromTimeCreated(postCreatedAt) {
    // https://duckduckgo.com/?q=javascript+date+always+point+to+epoch+time&t=ffab&atb=v196-1&ia=web
    const d = new Date(0);
    const day = new Date(d.setUTCSeconds(postCreatedAt));
    return {
      weekday: day.getDay(),
      timeOfDay: day.getHours(),
    };
  }

  function buildPostsPerHourPerDayTable(subredditPosts) {
    subredditPosts.forEach((post) => {
      const {
        id, author, created, title, url,
      } = post.data;
      const { weekday, timeOfDay } = getDayTimeFromTimeCreated(created);
      postsPerHourPerDay[Number(weekday)][Number(timeOfDay)].push({
        id, author, title, url, weekday, timeOfDay,
      });
    });
  }

  function generateHeatmap() {
    buildPostsPerHourPerDayTable(posts);
    // try {
    return postsPerHourPerDay.map((weekDay, weekDayIndex) => {
      // console.log('weekday', weekDay);
      const weekday = mapWeekday[weekDayIndex];
      return (
        <WeekRow key={weekday}>
          <Weekday className="weekday">{weekday}</Weekday>
          {weekDay.map((postsInHour, hourIndex) => (
            // eslint-disable-next-line react/no-array-index-key
            <CellWrapper key={hourIndex} postsInHour={postsInHour} />
          ))}
        </WeekRow>
      );
    });
    // } catch (error) {
    //   console.log('XXXXXXXXXXX', error);
    // }
  }

  const timeLine = (
    <TimeSliceWrapper>
      {
    postsTimeSlots.map((timeSlot) => (
      <TimeSlice key={timeSlot}>{timeSlot}</TimeSlice>
    ))
    }
    </TimeSliceWrapper>
  );

  return (
    <div>
      <HeatmapTable>
        <TimeFrame>
          <tr>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <th />
            <th className="timeline" colSpan="24">{timeLine}</th>
          </tr>
        </TimeFrame>
        <tbody>
          {generateHeatmap()}
        </tbody>
      </HeatmapTable>
      <div className="timezone" style={{ textAlign: 'center' }}>{getUserTimeZone()}</div>
    </div>
  );
}

PostsTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  posts: array.isRequired,
};

export default PostsTable;
