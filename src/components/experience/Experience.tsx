import React from 'react';
import { Title, Wrapper } from './Experience.styles';
import JobCard from '../job-card/JobCard';
import { AgarImage } from './agar/AgarImage.styles';
import colors from '../../constants/colors';

export default function Experience() {
  return (
    <>
      <Title>Experience</Title>
      <Wrapper>
        <JobCard
          title={'Web developer - Experian'}
          date={'June 2020 - Present'}
          tasks={[
            'Delivered features into various front end apps.',
            'Formed part of a committee created to investigate and choose a new AB testing tool for Experian.',
            'Integrated the REST API of the new AB testing tool on two applications. This process involved collaborating with various teams.',
          ]}
          bgColor={colors.mustard}
          color={colors.darkNavy}
        />
        <JobCard
          title={'Junior web developer - Experian'}
          date={'April 2019 - June 2020'}
          tasks={[
            'Learned and improved my technical abilities in different technologies and standards',
            'Built and maintained HTML, CSS and Js static pages.',
            'Created AB tests (delivered through Adobe Target).',
            'Built features and AB tests in Typescript React using Split.io for controlling the traffic allocation.',
            'Followed daily best practices and Agile standards.',
          ]}
          bgColor={colors.lightBlue}
          color={colors.darkNavy}
        />
      </Wrapper>
      <Title>Personal projects</Title>
      <Wrapper>
        <JobCard
          title={'Agar clone'}
          tasks={[
            'Real-time multiplayer game built in P5js, NodeJs and Socket.io',
            'Game state is kept on the server side and updated in response to events sent by different clients',
            'Implements a collision detector both for food-player and player-player collisions',
            'Runs as a Docker container on an AWS EC2 instance.',
          ]}
          bgColor={colors.orange}
          color={'white'}
        >
          <AgarImage />
        </JobCard>
      </Wrapper>
    </>
  );
}
