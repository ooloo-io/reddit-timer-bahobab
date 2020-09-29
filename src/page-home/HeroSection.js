import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button, DefaultSubreddit, Headline, Image, Section, Subline,
} from './HeroSection.style';
import { defaultSubReddit } from '../config';

function HeroSection() {
  return (
    <Section>
      <Headline>
        No reactions to your reddit posts?
      </Headline>
      <Subline>
        Great timing, great results! Find the best times to post on your subreddit.
      </Subline>
      <Button to={`/search/${defaultSubReddit}`}>Show me the best time</Button>
      <DefaultSubreddit>
        r/
        {defaultSubReddit}
      </DefaultSubreddit>
      <Link to={`/search/${defaultSubReddit}`}>
        <Image
          src="./images/heatmap@2x.png"
          srcSet="./images/heatmap.png, ./images/heatmap@2x.png 2x, ./images/heatmap@3x.png 3x"
          alt="Screenshots of heatmap"
        />
      </Link>
    </Section>
  );
}

export default HeroSection;
