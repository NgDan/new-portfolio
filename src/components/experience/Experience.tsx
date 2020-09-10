import React from 'react';
import { Title, Wrapper, Container } from './Experience.styles';
import JobCard from '../job-card/JobCard';
import { AgarImage } from './agar/AgarImage.styles';
import { DijkstraImage } from './dijkstra/DijkstraImage.styles';
import colors from '../../constants/colors';

export default function Experience() {
  return (
    <>
      <Container id='experience'>
        <Title>Experience</Title>
        <Wrapper>
          <JobCard
            title={'Web developer - Experian'}
            date={'June 2020 - Present'}
            tasks={[
              'Delivered features into various web apps using popular technologies such as React, NodeJs, NextJs, Typescript, Redux, Styled Components, Storybook, Jest, Axios etc.',
              'Formed part of a committee created to investigate and choose a new AB testing tool for Experian.',
              'Integrated the REST API of the new AB testing tool on two applications. This process involved collaborating with various teams.',
            ]}
            bgColor={colors.mustard}
            color={colors.veryDarkNavy}
          />
          <JobCard
            title={'Junior web developer - Experian'}
            date={'April 2019 - June 2020'}
            tasks={[
              'Learned and improved my technical abilities in different technologies and standards',
              'Built and maintained HTML, CSS and Js static pages.',
              'Created AB tests (delivered through Adobe Target).',
              'Built features and AB tests in Typescript React using Split.io for feature toggling and traffic allocation.',
              'Followed best practices and Agile standards.',
            ]}
            bgColor={colors.lightBlue}
            color={colors.veryDarkNavy}
          />
        </Wrapper>
      </Container>
      <Container id='projects'>
        <Title>Some personal projects</Title>
        <Wrapper>
          <JobCard
            title={'Agar clone'}
            tasks={[
              'Real-time multiplayer game built in P5js, NodeJs and Socket.io, inspired by the original Agar.io game',
              'Game state is kept on the server side and updated in response to events sent by different clients',
              'Implements a collision detector both for food-player and player-player collisions',
              'Runs as a Docker container on an AWS EC2 instance.',
            ]}
            bgColor={colors.orange}
            color={'white'}
            firstCta={{
              copy: 'Live website',
              link: 'http://ec2-3-9-132-177.eu-west-2.compute.amazonaws.com',
            }}
            secondCta={{
              copy: 'GitHub',
              theme: 'light',
              link: 'https://github.com/NgDan/agario-clone',
            }}
          >
            <AgarImage />
          </JobCard>
          <JobCard
            title={'Dijkstra shortest path visualiser'}
            tasks={[
              "Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks.",
              'The user can select a starting point, a few nodes on the map and an ending point',
              'The radius within which the nodes will connect can also be controlled',
              'This implementation is in no way perfect but was a fun exercise that taught me a few things',
            ]}
            bgColor={colors.mustard}
            color={colors.veryDarkNavy}
            firstCta={{
              copy: 'Live website',
              link: 'http://dijkstra-algo.s3-website.eu-west-2.amazonaws.com/',
            }}
            secondCta={{
              copy: 'GitHub',
              theme: 'light',
              link: 'https://github.com/NgDan/dijkstra-p5',
            }}
          >
            <DijkstraImage />
          </JobCard>
        </Wrapper>
      </Container>
    </>
  );
}
