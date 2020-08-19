import styled from 'styled-components';
import colors from '../../constants/colors';
import { rem } from 'polished';
import breakpoints from '../../constants/breakpoints';

export const Container = styled.div<{ bgColor: string }>`
  width: 100%;
  padding: ${rem(0)};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${rem(12)};
  margin-top: ${rem(16)};
  color: ${colors.darkNavy};
  overflow: hidden;
  @media only screen and (min-width: ${breakpoints.tabletPortrait + `px`}) {
    width: calc(50% - ${rem(8)});
  }
`;

export const Title = styled.p<{ color: string }>`
  font-size: ${rem(16)};
  font-weight: 600;
  margin: ${rem(16)} ${rem(0)} ${rem(0)} ${rem(0)};
  color: ${({ color }) => color};
  padding: ${rem(0)} ${rem(16)};
`;

export const Date = styled.p<{ color: string }>`
  font-size: ${rem(12)};
  margin: ${rem(4)} 0 0 0;
  color: ${({ color }) => color};
  padding: ${rem(0)} ${rem(16)};
`;

export const Tasks = styled.ul`
  padding: 0 1rem;
  /* margin: 0.5rem 0 0 0; */
  border-top: ${rem(2)} solid ${colors.darkNavy};
  margin: ${rem(8)} ${rem(16)} ${rem(16)} ${rem(16)};
`;

export const Task = styled.li`
  margin-top: 0.5rem;
`;

export const TaskDescription = styled.p<{ color: string }>`
  font-size: ${rem(16)};
  margin: 0;
  color: ${({ color }) => color};
`;
