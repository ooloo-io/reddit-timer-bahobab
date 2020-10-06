// const heatmapTable = new Array(7)
//   .fill([])
// .map(() => new Array(24).fill([]));
const heatmapTable = new Array(7).fill([]).map(() => new Array(24).fill([]).map(() => new Array().fill([])));

const allPosts = [
  {
    id: 'c8drjo',
    timeCreated: 1561846192,
    title: 'V8 7.6 Release: "In V8 v7.6, we’ve overhauled our JSON parser to be much faster at scanning and parsing JSON. This results in up to 2.7× faster parsing of data served by popular web pages."',
    score: 407,
    numComments: 27,
    author: 'OlanValesco',
    url: 'https://v8.dev/blog/v8-release-76',
  },
  {
    id: 'cbizuk',
    timeCreated: 1581204235,
    title: 'Bouncing balls simulation using plain JavaScript (demo link and detailed description in the README)',
    score: 146,
    numComments: 29,
    author: 'mtrajk93',
    url: 'https://github.com/MTrajK/bouncing-balls',
  },
  {
    id: 'fjodsi',
    timeCreated: 1577574509,
    title: '[AskJS] How are you deploying your front-end + node apps?',
    score: 120,
    numComments: 83,
    author: 'hellohi315',
    url: 'https://www.reddit.com/r/javascript/comments/egxt0v/askjs_how_are_you_deploying_your_frontend_node/',
  },
  {
    id: 'fe9mke',
    timeCreated: 1570321655,
    title: 'JS13k Results Are Out! (13k JavaScript Game Jam)',
    score: 128,
    numComments: 24,
    author: 'Slackluster',
    url: 'https://2019.js13kgames.com/#winners',
  },
];

function buildHeatmap() {
  allPosts.forEach(async (post) => {
    console.log('>>post', post.author);
    const {
      timeCreated, title, author, url,
    } = post;
    const { weekDay, timeOfDay } = await getDayAndTimeFromTimeCreated(timeCreated);
    console.log('weekDay, timeOftheDay', weekDay, timeOfDay);
    console.log('-------------author', author);
    heatmapTable[Number(weekDay)][Number(timeOfDay)].push({ author, title, url });
    // heatmapTable[Number(getDayAndTimeFromTimeCreated(timeCreated).weekDay)][Number(getDayAndTimeFromTimeCreated(timeCreated).timeOfDay)].push({ author, title, url });
    console.log('heatmap table---------------', heatmapTable);
  });
}

function getDayAndTimeFromTimeCreated(timestamp) {
  const day = new Date(timestamp);
  return {
    weekDay: day.getDay(),
    timeOfDay: day.getHours(),
  };
}

const x = buildHeatmap();

// console.log(heatmapTable);
