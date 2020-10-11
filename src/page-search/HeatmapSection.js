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
    isLoading, hasError, postsPerDay, allPosts,
  } = useFetchPosts(subreddit);
  const [selectedDayAndHour, setSelectedDayAndHour] = useState({ day: null, hour: null });
  const [postsTableIsVisible, setPostsTableIsVisible] = useState(false);

  // console.log('>>>check if selected day/hour click re-renders component', selectedDayAndHour);
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
  // console.log('day, hour, postPerHour', day, hour, postsPerDay[day || 0][hour || 0]);
  // {<pre>JSON.stringify(selectedDayAndHour)</pre>}

  return (
    <>
      <Container as="section">
        <Heatmap
          postsPerDay={postsPerDay}
          selectedDayAndHour={selectedDayAndHour}
          onClickHour={setSelectedDayAndHour}
          showPostsTable={setPostsTableIsVisible}

        />
      </Container>

      <Container as="section">
        {
        postsTableIsVisible && <PostsTable posts={allPosts[day][hour]} />
      }
      </Container>
    </>
  );
}

export default HeatmapSection;
