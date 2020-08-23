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
            I'm a web developer based in London who is enthusiastic about
            working in this field. I enjoy learning and discussing about
            techniques, patterns and clever solutions that lead to high quality
            code.
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
            I've got a natural curiosity and interest in technical notions,
            which makes development entertaining to me. I adapt quickly, enjoy
            challenges and I'm keen on collaborating with others.
          </Answer>
        </Section>
      </SectionsWrapper>
    </Container>
  );
};
export default AboutMe;
