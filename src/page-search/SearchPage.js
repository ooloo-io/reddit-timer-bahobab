import React from 'react';

import { Container, Headline } from './SearchPage.style';
import SubredditForm from './SubredditForm';
import Heatmap from './Heatmap';

function SearchPage() {
  return (
    <Container>
      <Headline>Find the best time for a subreddit</Headline>
      <SubredditForm />

      <Heatmap />
    </Container>
  );
}

export default SearchPage;
