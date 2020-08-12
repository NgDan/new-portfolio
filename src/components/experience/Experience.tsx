import React from 'react';
import { Title, Wrapper } from './Experience.styles';
import JobCard from '../job-card/JobCard';

export default function Experience() {
  return (
    <>
      <Title>Experience</Title>
      <Wrapper>
        <JobCard
          title={'Web developer - Experian'}
          date={'June 2020 - Present'}
          tasks={['123']}
        />
        <JobCard
          title={'Junior web developer - Experian'}
          date={'April 2019 - June 2020'}
          tasks={['123']}
        />
      </Wrapper>
    </>
  );
}
