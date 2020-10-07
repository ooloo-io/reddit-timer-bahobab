import React, { useState } from 'react';

import {
  WeekRow, Weekday, Cell, TimeFrame, HeatmapTable,
} from './PostsTable.style';

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

// globals

function CellWrapper({ postsInHour }) {
  const numPosts = postsInHour.length;
  const cellHighlight = '1px solid red';
  const cellDefaultStyle = {
    border: 'unset',
    backgroundColor: `${getCellBGColor()}`,
  };

  const [cellStyle, setCellStyle] = useState(cellDefaultStyle);
  const [isSelected, setIsSelected] = useState(false);

  function getCellBGColor() {
    return cellBackgroundColorMap[numPosts] || cellBackgroundColorMap[10];
  }

  function handleCellClick() {
    setCellStyle(
      { ...cellStyle, border: '1px solid red' },
    );
    setIsSelected(true);
  }

  function handleOnMouseEnter(event) {
    if (event.target.style.border !== cellHighlight) {
      event.target.style.border = cellHighlight;
    }
  }

  function handleOnMouseLeave(event) {
    if (!isSelected) {
      event.target.style.border = 'none';
    }
  }

  return (
    <Cell
      style={cellStyle}
      onClick={handleCellClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {numPosts}
    </Cell>
  );
}

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
    return postsPerHourPerDay.map((weekDay, weekDayIndex) => (
      <WeekRow key={weekDayIndex}>
        <Weekday>{mapWeekday[weekDayIndex]}</Weekday>
        {weekDay.map((postsInHour, hourIndex) => (
          <CellWrapper key={hourIndex} postsInHour={postsInHour} />
        ))}
      </WeekRow>
    ));
    // } catch (error) {
    //   console.log('XXXXXXXXXXX', error);
    // }
  }

  const globalTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localTimeZone = (new Date()).toTimeString().split('(')[1].replace(')', '');
  const userTimeZone = `${globalTimeZone} - ${localTimeZone}`;

  return (
    <div>
      <HeatmapTable>
        <TimeFrame><tr><th colSpan="24">Posts timeframe coming here</th></tr></TimeFrame>
        <tbody>{generateHeatmap()}</tbody>
      </HeatmapTable>
      <div style={{ textAlign: 'center' }}>{userTimeZone}</div>
    </div>
  );
}

export default PostsTable;
