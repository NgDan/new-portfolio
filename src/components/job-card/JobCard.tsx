import React from 'react';
import {
  Container,
  Title,
  Date,
  Tasks,
  Task,
  TaskDescription,
} from './JobCard.styles';

export default function JobCard() {
  return (
    <Container>
      <Title>Web developer</Title>
      <Date>June 2020 - Present</Date>
      <Tasks>
        <Task>
          <TaskDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            rerum.
          </TaskDescription>
        </Task>
        <Task>
          <TaskDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            rerum.
          </TaskDescription>
        </Task>
      </Tasks>
    </Container>
  );
}
