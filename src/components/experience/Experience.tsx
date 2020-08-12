import React from 'react';
import { Title, Wrapper } from './Experience.styles';
import JobCard from '../job-card/JobCard';

export default function Experience() {
  return (
    <>
      <Title>Experience</Title>
      <Wrapper>
        <JobCard
          title={'Junior web developer - Experian'}
          date={'April 2019 - June 2020'}
          tasks={[
            'Learned from experienced developers and improved my technical abilities in different technologies and standards',
            'Built and maintained HTML, CSS and Js static pages.',
            'Created AB tests (delivered through Adobe Target).',
            'Built features and AB tests in Typescript React using Split.io for controlling the traffic.',
            'Practiced Agile standards such as unit testing, pull request reviews, pair programming, continuous delivery and integration, sprints, user stories, estimations etc.',
          ]}
        />
        <JobCard
          title={'Web developer - Experian'}
          date={'June 2020 - Present'}
          tasks={[
            'Delivered features on all Experian front end apps (except mobile app) which are maintained by different teams. Helped other team members with getting familiar with these apps.',
            'Formed part of a committee created to investigate and choose a new AB testing tool for Experian. We’ve interviewed 6 different companies and chose the product that best fitted our needs.',
            'Integrated the REST API of the new AB testing tool with multiple of Experian’s applications. This process involved collaborating with various technical teams and business stakeholders.',
          ]}
        />
      </Wrapper>
    </>
  );
}
