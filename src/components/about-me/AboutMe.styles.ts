import styled from 'styled-components';
import { rem } from 'polished';
import breakpoints from '../../constants/breakpoints';
import colours from '../../constants/colours';

export const Container = styled.div`
  color: ${colours.darkNavy};
`;
export const SectionsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  @media only screen and (min-width: ${breakpoints.tabletPortrait + `px`}) {
    flex-flow: row;
  }
`;
export const Section = styled.div`
  width: 100%;
  padding: ${rem(8)} ${rem(16)} ${rem(8)} ${rem(16)};
  margin: 0;
  @media only screen and (min-width: ${breakpoints.tabletPortrait + `px`}) {
    width: 50%;
  }
`;
export const Title = styled.p`
  padding: ${rem(16)} ${rem(16)} 0 ${rem(16)};
  margin: 0;
  font-size: ${rem(22)};
  color: ${colours.darkNavy};
  font-weight: 600;
`;
export const Question = styled.p`
  font-size: ${rem(18)};
  font-weight: 600;
  margin: 0;
`;
export const Answer = styled.p`
  margin: ${rem(8)} 0 0 0;
`;
