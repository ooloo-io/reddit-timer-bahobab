import React from 'react';

function PostsTable({ posts }) {
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
    subredditPosts.forEach(async (post) => {
      // console.log(post);
      const {
        id, author, created, title, url,
      } = post.data;
      const { weekday, timeOfDay } = await cb(created);
      // console.log('>>>>>>>>>', weekday, timeOfDay);
      postsPerHourPerDay[Number(weekday)][Number(timeOfDay)].push({
        id, author, title, url, weekday, timeOfDay,
      });
    });
  }

  function createWeekRow(weekData) {
    return (
      `<td>
        ${
      weekData.map((hours) => {
        console.log('hours', hours);
        return hours.length;
      })
      }
      </td>`
    );
  }

  async function generateHeatmap() {
    buildPostsPerHourPerDayTable(posts, getDayTimeFromTimeCreated);
    // console.log('>>>>>>>>>', postsPerHourPerDay);
    // try {
    myHeatmap = await postsPerHourPerDay.map((weekDay, weekDayIndex) => {
      switch (weekDayIndex) {
        case 0: {
          return (
            <tr>
              <td>Sunday</td>
              {createWeekRow(weekDay)}
            </tr>
          );
        }

        case 1: {
          return (
            <tr>
              <td>Monday</td>
              {createWeekRow(weekDay)}
            </tr>
          );
        }
        case 2: {
          return (
            <tr>
              <td>Tuesday</td>
              {createWeekRow(weekDay)}
            </tr>
          );
        }
        case 3: {
          return (
            <tr>
              <td>Wednesday</td>
              {createWeekRow(weekDay)}
            </tr>
          );
        }
        case 4: {
          return (
            <tr>
              <td>Thursday</td>
              {createWeekRow(weekDay)}
            </tr>
          );
        }
        case 5: {
          return (
            <tr>
              <td>Friday</td>
              {createWeekRow(weekDay)}
            </tr>
          );
        }
        case 6: {
          return (
            <tr>
              <td>Saturday</td>
              {createWeekRow(weekDay)}
            </tr>
          );
        }

        default: return null;
      }
    });
    // } catch (error) {
    //   console.log('XXXXXXXXXXX', error);
    // }

    return myHeatmap;
  }

  generateHeatmap().then((results) => results.map((hour) => hour));

  // console.log('%%%%%%%', myHeatmap);

  return (
    <div>
      <h2>Heatmap Table</h2>
      <p>{posts.length}</p>
    </div>
  );
}

export default PostsTable;
