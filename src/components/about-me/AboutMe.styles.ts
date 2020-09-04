import styled from 'styled-components';
import { rem } from 'polished';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';

export const Container = styled.div`
  color: ${colors.veryDarkNavy};
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
  margin: 0;
  padding: ${rem(8)} ${rem(16)} ${rem(8)} ${rem(16)};
  @media only screen and (min-width: ${breakpoints.tabletPortrait + `px`}) {
    &:first-of-type {
      padding: ${rem(8)} ${rem(16)} ${rem(8)} ${rem(0)};
    }
    &:last-of-type {
      padding: ${rem(8)} ${rem(0)} ${rem(8)} ${rem(16)};
    }
    width: 50%;
  }
`;
export const Title = styled.p`
  padding: ${rem(16)} ${rem(16)} 0 ${rem(16)};
  margin: 0;
  font-size: ${rem(22)};
  color: ${colors.veryDarkNavy};
  font-weight: 600;
`;
export const Question = styled.p`
  font-size: ${rem(16)};
  font-weight: 600;
  margin: 0;
`;
export const Answer = styled.p`
  margin: ${rem(8)} 0 0 0;
`;
