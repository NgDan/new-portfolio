import React from 'react';
import {
  Container,
  Section,
  Title,
  Question,
  Answer,
  SectionsWrapper,
} from './AboutMyself.styles';

const AboutMyself = () => {
  return (
    <Container>
      <Title>About myself</Title>
      <SectionsWrapper>
        <Section>
          <Question>Who am I?</Question>
          <Answer>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur eius incidunt iure laudantium sed odit inventore,
            officiis nostrum tempore soluta est ipsam perferendis, tenetur,
            recusandae veritatis molestiae accusamus dolor exercitationem.
          </Answer>
        </Section>
        <Section>
          <Question>What I'm looking for</Question>
          <Answer>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur eius incidunt iure laudantium sed odit inventore,
            officiis nostrum tempore soluta est ipsam perferendis, tenetur,
            recusandae veritatis molestiae accusamus dolor exercitationem.
          </Answer>
        </Section>
        <Section>
          <Question>What I'm good at</Question>
          <Answer>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur eius incidunt iure laudantium sed odit inventore,
            officiis nostrum tempore soluta est ipsam perferendis, tenetur,
            recusandae veritatis molestiae accusamus dolor exercitationem.
          </Answer>
        </Section>
      </SectionsWrapper>
    </Container>
  );
};
export default AboutMyself;
