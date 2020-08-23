import React from 'react';
import {
  Container,
  Section,
  Title,
  Question,
  Answer,
  SectionsWrapper,
} from './AboutMe.styles';

const AboutMe = () => {
  return (
    <Container>
      <SectionsWrapper>
        <Section>
          <Question>Who I am</Question>
          <Answer>
            I'm an enthusiastic person who has moved to London last year in
            search of my first job as a developer. I enjoy programming in
            general and I'm eager to learn new concepts and share thoughts about
            them with others.
          </Answer>
        </Section>
        <Section>
          <Question>What I'm looking for</Question>
          <Answer>
            Although in the long run I'm interested in multiple programming
            paradigms, in the short term I'm focused on specific technologies
            such as React, Typescript, NodeJs, C# and .NET Core.
          </Answer>
        </Section>
        <Section>
          <Question>What I'm good at</Question>
          <Answer>
            The curiosity and interest in technical notions smoothen my learning
            and working processes. I adapt quickly and enjoy challenges and
            finding interesting solutions.
          </Answer>
        </Section>
      </SectionsWrapper>
    </Container>
  );
};
export default AboutMe;
