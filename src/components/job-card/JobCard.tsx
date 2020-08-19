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
  date?: string;
  tasks: Array<string>;
  bgColor: string;
  color: string;
}

const JobCard: FC<JobCardProps> = ({
  title,
  date,
  tasks,
  bgColor,
  color,
  children,
}) => {
  return (
    <Container bgColor={bgColor}>
      {children}
      <Title color={color}>{title}</Title>
      {date ? <Date color={color}>{date}</Date> : null}
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
