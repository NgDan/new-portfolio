import React, { FC } from 'react';
import {
  Container,
  Title,
  Date,
  Tasks,
  Task,
  TaskDescription,
} from './JobCard.styles';

interface JobCardProps {
  title: string;
  date: string;
  tasks: Array<string>;
}

const JobCard: FC<JobCardProps> = ({ title, date, tasks }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Tasks>
        {tasks.map((task) => (
          <Task>
            <TaskDescription>{task}</TaskDescription>
          </Task>
        ))}
      </Tasks>
    </Container>
  );
};
export default JobCard;
