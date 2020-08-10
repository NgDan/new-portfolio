import { rem } from 'polished';
import styled from 'styled-components';
import colours from '../../constants/colours';

export const Container = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: ${rem(24)};
`;

export const SkillName = styled.p`
  margin: 0 0 ${rem(8)} 0;
  font-size: ${rem(12)};
  color: white;
`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const Skill = styled.div`
  width: ${rem(50)};
  height: ${rem(50)};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0.5rem 1rem;
  background-color: white;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  /* box-shadow: ${({ color }) =>
    `${rem(0)} ${rem(0)} ${rem(16)} ${rem(-3)} ${color}`}; */
`;
