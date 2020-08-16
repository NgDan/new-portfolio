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
  bgColor: string;
  color: string;
}

const JobCard: FC<JobCardProps> = ({ title, date, tasks, bgColor, color }) => {
  return (
    <Container bgColor={bgColor}>
      <Title color={color}>{title}</Title>
      <Date color={color}>{date}</Date>
      <Tasks>
        {tasks.map((task) => (
          <Task key={task}>
            <TaskDescription color={color}>{task}</TaskDescription>
          </Task>
        ))}
      </Tasks>
    </Container>
  );
};
export default JobCard;
