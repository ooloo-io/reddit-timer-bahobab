// eslint-disable-next-line import/prefer-default-export
export const defaultSubReddit = 'javascript';

export const cellHighlight = '1px solid red';

export const mapWeekday = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

export const cellBackgroundColorMap = {
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

export function getUserTimeZone() {
  const globalTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localTimeZone = (new Date()).toTimeString().split('(')[1].replace(')', '');
  return `${globalTimeZone} - ${localTimeZone}`;
}
