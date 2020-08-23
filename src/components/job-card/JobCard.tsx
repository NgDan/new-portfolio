import React, { FC, ReactNode } from 'react';
import {
  Container,
  Title,
  Date,
  Tasks,
  Task,
  TaskDescription,
  Cta,
  CtasWrapper,
} from './JobCard.styles';
import merge from 'lodash/merge';
import colors from '../../constants/colors';

interface ctaProps {
  copy?: string | undefined;
  link?: string;
  theme?: 'dark' | 'light';
}

type themeType = 'light' | 'dark' | undefined;

interface JobCardProps {
  title: string;
  date?: string;
  tasks: Array<string>;
  bgColor: string;
  color: string;
  firstCta?: ctaProps;
  secondCta?: ctaProps;
}

const defaultCtaProps: ctaProps = {
  copy: undefined,
  theme: 'dark',
};

export interface Icolors {
  text: string;
  bg: string;
  bgHighlight: string;
  textHighlight: string;
}

const JobCard: FC<JobCardProps> = ({
  title,
  date,
  tasks,
  bgColor,
  color,
  children,
  firstCta,
  secondCta,
}) => {
  const firstCtaProps = merge({}, defaultCtaProps, firstCta);
  const secondCtaProps = merge({}, defaultCtaProps, secondCta);
  const getColors = (theme: themeType): Icolors => {
    console.log('theme: ', theme);
    const text = theme === 'light' ? colors.darkNavy : 'white';
    const bg = theme === 'light' ? 'white' : colors.darkNavy;
    const bgHighlight =
      theme === 'light' ? colors.darkNavy : colors.veryDarkNavy;
    const textHighlight = 'white';
    return { text, bg, bgHighlight, textHighlight };
  };
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
      {!!(firstCtaProps?.copy || secondCtaProps?.copy) && (
        <CtasWrapper>
          {firstCtaProps?.copy ? (
            <Cta
              colors={getColors(firstCtaProps.theme)}
              href={firstCtaProps.link}
              target={'_blank'}
            >
              {firstCtaProps?.copy}
            </Cta>
          ) : null}
          {secondCtaProps?.copy ? (
            <Cta
              colors={getColors(secondCtaProps.theme)}
              href={secondCtaProps.link}
              target={'_blank'}
            >
              {secondCtaProps?.copy}
            </Cta>
          ) : null}
        </CtasWrapper>
      )}
    </Container>
  );
};
export default JobCard;
