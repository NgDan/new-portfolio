import { rem } from 'polished';
import styled from 'styled-components';
import colors from '../../constants/colors';
import BackgroundPattern from './icons/BackgroundPattern';

export const Container = styled.div`
  width: 100%;
  display: block;
  position: relative;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: ${rem(12)};
  background-color: ${colors.darkNavy};
  background-image: ${BackgroundPattern};
  padding: ${rem(6)} ${rem(16)} ${rem(8)} ${rem(16)};
  border-radius: ${rem(12)};
  box-shadow: 0 ${rem(3)} ${rem(
  15
)} rgba(0, 0, 0, 0.7)  justify-content: space-around;
`;

export const SkillName = styled.p`
  margin: 0 0 ${rem(8)} 0;
  font-size: ${rem(12)};
  color: white;
  font-weight: 600;
`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  @media only screen and (min-width: 374px) {
    width: 20%;
  }
  @media only screen and (min-width: 683px) {
    width: 10%;
  }
`;

export const Skill = styled.div`
  width: ${rem(50)};
  height: ${rem(50)};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: ${rem(0)} ${rem(6)} ${rem(0)} ${rem(6)};
`;

export const Disclaimer = styled.p`
  margin: 0;
  color: white;
  margin-top: ${rem(4)};
  padding: 0 ${rem(8)};
  width: 100%;
  font-size: ${rem(12)};
`;

export const Title = styled.p`
  color: ${colors.darkNavy};
  font-weight: 600;
  margin: ${rem(12)} 0 0 0;
`;
