import styled from 'styled-components';
import breakpoints from '../constants/breakpoints';
import { rem } from 'polished';

export const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  margin: auto;
  width: 100%;
  @media only screen and (min-width: ${breakpoints.tabletPortrait + `px`}) {
    max-width: ${breakpoints.tabletPortrait + `px`};
    width: calc(100% - ${rem(32)});
  }
  @media only screen and (min-width: ${breakpoints.tablet + `px`}) {
    max-width: ${breakpoints.tablet + `px`};
  }
`;
