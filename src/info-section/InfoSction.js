import React from 'react';
// import { Link } from 'react-router-dom';

import { Container, InfoLink, Section } from './InfoSection.style';

function InfoSection() {
  return (
    <Container>
      <Section id="how-it-works">
        <h2>How it works</h2>
      </Section>
      <Section id="about">
        <h2>About</h2>
        <InfoLink as="a" href="https://ooloo.io">ooloo.io</InfoLink>
        <InfoLink as="a" href="https://ooloo.io/employers">ooloo.io/employers</InfoLink>
      </Section>
    </Container>
  );
}

export default InfoSection;
