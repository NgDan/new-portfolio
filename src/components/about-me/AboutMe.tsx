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
            I'm a web developer based in London who is very enthusiastic about
            working in this field. I like learning, discussing about software
            and sharing thoughts with other professionals in this industry.
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
            I have a natural curiosity and interest in technical notions, which
            makes development entertaining to me. I adapt quickly, enjoy
            challenges and I'm keen on collaborating with others.
          </Answer>
        </Section>
      </SectionsWrapper>
    </Container>
  );
};
export default AboutMe;
