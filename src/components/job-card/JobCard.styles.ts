import styled from 'styled-components';
import colors from '../../constants/colors';
import { rem } from 'polished';
import breakpoints from '../../constants/breakpoints';
import { Icolors } from './JobCard';

export const Container = styled.div<{ bgColor: string }>`
  width: 100%;
  padding: ${rem(0)};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${rem(12)};
  margin-top: ${rem(16)};
  color: ${colors.darkNavy};
  overflow: hidden;
  box-shadow: 0 ${rem(1)} ${rem(8)} rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
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

export const CtasWrapper = styled.div`
  display: flex;
  width: calc(100% - ${rem(32)});
  justify-content: space-between;
  margin: auto ${rem(16)} ${rem(16)} ${rem(16)};
`;

export const Cta = styled.a<{ colors: Icolors }>`
  font-size: ${rem(16)};
  background-color: ${({ colors }) => colors.bg};
  color: ${({ colors }) => colors.text};
  width: calc(50% - 0.5rem);
  padding: ${rem(8)} ${rem(16)};
  text-align: center;
  border-radius: ${rem(8)};
  transition: background-color 200ms ease-in-out;
  box-shadow: 0 ${rem(1)} ${rem(8)} rgba(0, 0, 0, 0.8);
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ colors }) => colors.bgHighlight};
    color: ${({ colors }) => colors.textHighlight};
    cursor: pointer;
  }
`;
