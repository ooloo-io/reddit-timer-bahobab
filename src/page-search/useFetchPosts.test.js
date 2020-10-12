import { renderHook } from '@testing-library/react-hooks';

import useFetchPosts from './useFetchPosts';

const getNumPosts = (nestedPostsArray) => nestedPostsArray.reduce(
  (numTotal, postsPerDay) => postsPerDay.reduce(
    (numPerDay, postsPerHour) => numPerDay + postsPerHour.length, numTotal,
  ),
  0,
);

// const getPostsPerHout

test('loads 500 posts from the Reddit API', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchPosts('500-posts'));

  expect(result.current.isLoading).toBe(true);
  // expect(result.current.posts).toEqual([]);
  expect(result.current.postsPerDay).toEqual([]);

  await waitForNextUpdate();

  expect(result.current.isLoading).toBe(false);
  // expect(result.current.posts.length).toEqual(500);
  expect(getNumPosts(result.current.postsPerDay)).toEqual(500); // 500 is MAXNUM_TO_FETCH
  expect(result.current.postsPerDay).toMatchSnapshot();

  // const postTitles = result.current.posts.map(({ data }) => data.title);
  // expect(postTitles).toMatchSnapshot(() => useFetchPosts('500-posts'));
});

test('stop loading when less than 500 posts are available', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchPosts('less-than-500-posts'));

  await waitForNextUpdate();

  expect(result.current.isLoading).toBe(false);
  // expect(result.current.posts.length).toEqual(270);
  expect(getNumPosts(result.current.postsPerDay)).toEqual(270);
});

test('returns error when the request fails', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchPosts('failing-request'));

  await waitForNextUpdate();

  expect(result.current.isLoading).toBe(false);
  expect(result.current.hasError).toBe(true);
});
