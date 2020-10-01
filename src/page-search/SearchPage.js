import React from 'react';

import { Section, Headline, Status } from './SearchPage.style';
import Search from './Search';

function SearchPage() {
  return (
    <Section>
      <Headline>Find the best time for a subreddit</Headline>
      <Search />
      <Status />
    </Section>
  );
}

export default SearchPage;
