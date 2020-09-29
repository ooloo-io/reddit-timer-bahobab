import React from 'react';

import HeroSection from './HeroSection';
import InfoSection from '../info-section';

function HomePage() {
  return (
    <>
      <HeroSection />
      <InfoSection info="About" />
      <InfoSection info="How it works" />
    </>
  );
}

export default HomePage;
