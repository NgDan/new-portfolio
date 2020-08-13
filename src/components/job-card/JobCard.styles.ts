import styled from 'styled-components';
import colours from '../../constants/colours';
import { rem } from 'polished';
import breakpoints from '../../constants/breakpoints';

export const Container = styled.div<{ bgColor: string }>`
  width: 100%;
  padding: ${rem(16)};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${rem(12)};
  margin-top: ${rem(16)};
  color: ${colours.darkNavy};
  @media only screen and (min-width: ${breakpoints.tabletPortrait + `px`}) {
    width: calc(50% - ${rem(8)});
  }
`;

export const Title = styled.p`
  font-size: ${rem(20)};
  font-weight: 600;
  margin: 0;
  /* color: ${colours.darkNavy}; */
`;

export const Date = styled.p`
  font-size: ${rem(12)};
  margin: ${rem(4)} 0 0 0;
  border-bottom: ${rem(2)} solid ${colours.darkNavy};
  padding-bottom: ${rem(12)};
`;

export const Tasks = styled.ul`
  padding: 0 1rem;
  margin: 0.5rem 0 0 0;
`;

export const Task = styled.li`
  margin-top: 0.5rem;
`;

export const TaskDescription = styled.p`
  font-size: ${rem(16)};
  margin: 0;
  /* color: ${colours.darkNavy}; */
`;
