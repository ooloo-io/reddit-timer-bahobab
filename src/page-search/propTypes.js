import {
  instanceOf,
  number,
  shape,
  string,
} from 'prop-types';

const post = shape({
  createdAt: instanceOf(Date).isRequired,
  title: string.isRequired,
  url: string.isRequired,
  score: number.isRequired,
  numComments: number.isRequired,
  author: string.isRequired,
});

export default { post };
