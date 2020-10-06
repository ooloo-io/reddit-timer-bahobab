import React, { useState } from 'react';

import {
  WeekRow, Weekday, Cell, TimeFrame, HeatmapTable,
} from './PostsTable.style';

function PostsTable({ posts }) {
  const mapWeekday = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };

  const cellBackgroundColorMap = {
    0: '#e0e592',
    1: '#aed396',
    2: '#a9d194',
    3: '#a0ce93',
    4: '#99cd94',
    5: '#8cc894',
    6: '#5eb391',
    7: '#5db492',
    8: '#5cb391',
    9: '#5aad8c',
    10: '#3984a3',
  };

  const cellHighlightColor = 'red';

  const [cellBgColor, setCellBgColor] = useState(cellBackgroundColorMap[0]);
  const [cellHighlight, setCellHighlight] = useState('');

  let myHeatmap;

  const postsPerHourPerDay = new Array(7)
    .fill([])
    .map(() => new Array(24)
      .fill([])
      .map(() => []));

  function getDayTimeFromTimeCreated(postCreatedAt) {
    const day = new Date(postCreatedAt);
    return {
      weekday: day.getDay(),
      timeOfDay: day.getHours(),
    };
  }

  function buildPostsPerHourPerDayTable(subredditPosts, cb) {
    subredditPosts.forEach((post) => {
      // console.log(post);
      const {
        id, author, created, title, url,
      } = post.data;
      const { weekday, timeOfDay } = cb(created);
      // console.log('>>>>>>>>>', weekday, timeOfDay);
      postsPerHourPerDay[Number(weekday)][Number(timeOfDay)].push({
        id, author, title, url, weekday, timeOfDay,
      });
    });
  }

  function generateHeatmap() {
    buildPostsPerHourPerDayTable(posts, getDayTimeFromTimeCreated);
    // console.log('>>>>>>>>>', postsPerHourPerDay);
    console.log('ttttttttttt', postsPerHourPerDay[0][22]);
    // try {
    return postsPerHourPerDay.map((weekDay, weekDayIndex) => {
      console.log('-------weekday', mapWeekday[weekDayIndex]);
      return (
        <WeekRow key={weekDayIndex}>
          <Weekday>{mapWeekday[weekDayIndex]}</Weekday>
          {weekDay.map((hour, hourIndex) => {
            console.log('hour 22, posts', hourIndex, hour['22']);
            return (
              <Cell key={hourIndex}>{hour.length}</Cell>
            );
          })}
        </WeekRow>
      );
    });
    // } catch (error) {
    //   console.log('XXXXXXXXXXX', error);
    // }

    // return myHeatmap;
  }

  myHeatmap = generateHeatmap(); // .then((results) => results.map((hour) => hour));

  console.log('**********', myHeatmap);
  const globalTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localTimeZone = (new Date()).toTimeString().split('(')[1].replace(')', '');
  const userTimeZone = `${globalTimeZone} - ${localTimeZone}`;

  return (
    <div>
      <h2>Heatmap Table</h2>
      <HeatmapTable>
        <TimeFrame><tr><th colSpan="24">Posts timeframe coming here</th></tr></TimeFrame>
        <tbody>{myHeatmap}</tbody>
      </HeatmapTable>
      <div>{userTimeZone}</div>
    </div>
  );
}

export default PostsTable;
