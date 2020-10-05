import { useEffect, useState } from 'react';

export async function fetchPaginatedPosts(subreddit, previousPosts = [], after = null) {
  let url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;

  if (after) {
    url += `&after=${after}`;
  }
  const response = await fetch(url); // should be hihjacked by mock server

  const { data } = await response.json();
  // const allPosts = [...previousPosts, ...data.children];
  const allPosts = previousPosts.concat(data.children);

  const noMorePosts = data && data.dist < 100; // if we're fetching 100 posts per request
  const limitReached = allPosts.length >= 500;

  if (noMorePosts || limitReached) {
    return allPosts;
  }
  // recursive call using the after cursor of the last current fetch request
  return fetchPaginatedPosts(subreddit, allPosts, data.after);
}

function useFetchPosts(subreddit) {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    setStatus('pending');

    fetchPaginatedPosts(subreddit)
      .then((newPosts) => {
        setPosts(newPosts);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [subreddit]);

  return {
    isLoading: status === 'pending',
    hasError: status === 'rejected',
    posts,
  };
}

export default useFetchPosts;
