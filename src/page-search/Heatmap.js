import React from 'react';
import { useParams } from 'react-router-dom';

import useFetchPosts from './useFetchPosts';
import { ErrorContainer, LoadingContainer, LoadingSpinner } from './Heatmap.style';

function Heatmap() {
  const { subreddit } = useParams(); // route param set in App
  const { isLoading, hasError, posts } = useFetchPosts(subreddit);

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
      </LoadingContainer>
    );
  }

  if (hasError) {
    return (
      <ErrorContainer>
        Something went wrong. Please check the subreddit you entered then try again.
      </ErrorContainer>
    );
  }

  return (
    <div>{posts.length}</div>
  );
}

export default Heatmap;
