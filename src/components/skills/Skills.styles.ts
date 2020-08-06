import { rem } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: ${rem(24)};
`;

export const SkillName = styled.p``;

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
  box-shadow: ${({ color }) =>
    `${rem(0)} ${rem(0)} ${rem(16)} ${rem(-3)} ${color}`};
`;
