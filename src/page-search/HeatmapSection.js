import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import useFetchPosts from './useFetchPosts';
import Heatmap from './Heatmap';
import PostsTable from './PostsTable';
import {
  Container, LoadingContainer, LoadingSpinner, ErrorContainer,
} from './HeatmapSection.style';

function HeatmapSection() {
  const { subreddit } = useParams(); // route param set in App
  const {
    isLoading, hasError, postsPerDay,
  } = useFetchPosts(subreddit);
  const [selectedDayAndHour, setSelectedDayAndHour] = useState({ day: null, hour: null });
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

  const { day, hour } = selectedDayAndHour;
  const selectedPosts = (postsPerDay[day] && postsPerDay[day][hour]) || [];

  return (
    <>
      <Container as="section">
        <Heatmap
          postsPerDay={postsPerDay}
          selectedDayAndHour={selectedDayAndHour}
          onClickHour={setSelectedDayAndHour}
          // showPostsTable={setPostsTableIsVisible}
        />

        {
          selectedPosts.length > 0 && (
            <PostsTable posts={selectedPosts} />
          )
        }
      </Container>
    </>
  );
}

export default HeatmapSection;
