import React from 'react';
import { Link } from 'react-router-dom';

import { HeroSection, Heatmap } from './Hero.style';

function Hero() {
  return (
    <HeroSection>
      <h1 title="hero-title">No reactions to your reddit posts?</h1>
      <h5 title="hero-subtitle">Great timing, great results! Find the best time to post on your subreddit.</h5>
      <Link to="/search/javascript"><button type="button" title="cta">SHOW ME THE BEST TIME</button></Link>
      <p><span title="subreddit">/r/javascript</span></p>
      <Link to="/search/javascript">
        <Heatmap title="heatmap" />
      </Link>
    </HeroSection>
  );
}

export default Hero;
