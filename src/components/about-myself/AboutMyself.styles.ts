import styled from 'styled-components';
import { rem } from 'polished';
import breakpoints from '../../constants/breakpoints';
import colours from '../../constants/colours';

export const Container = styled.div``;
export const SectionsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  @media only screen and (min-width: ${breakpoints.tabletPortrait + `px`}) {
    flex-flow: row;
  }
`;
export const Section = styled.div`
  width: 100%;
  padding: ${rem(16)};
  @media only screen and (min-width: ${breakpoints.tabletPortrait + `px`}) {
    width: 50%;
  }
`;
export const Title = styled.p`
  padding: ${rem(16)};
`;
export const Question = styled.p``;
export const Answer = styled.p``;
