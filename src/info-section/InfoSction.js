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
        <p>
          This app was created during a course on &nbsp;
          <InfoLink as="a" href="https://ooloo.io">ooloo.io</InfoLink>
&nbsp; with the goal to implement pixel-perfect real-world application with professional workflows and tools like Kanban, Clickup, Zeplin, GitHub, pull requests and code reviews. &nbsp;
          <InfoLink as="a" href="https://ooloo.io/employers"> &nbsp; Click here for more information</InfoLink>
        </p>
      </Section>
    </Container>
  );
}

export default InfoSection;
