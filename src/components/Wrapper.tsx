import styled from 'styled-components';
import breakpoints from '../constants/breakpoints';
import { rem } from 'polished';
import colours from '../constants/colours';

export const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  /* @media only screen and (max-width: ${breakpoints.tabletPortrait + `px`}) {
  } */
  /* background-position: 100px -102px;
  background-size: 130%; */
  background-color: ${colours.blue};
  margin:auto;
  width: 100%;
  @media only screen and (min-width: ${breakpoints.tabletPortrait + `px`}) {
    max-width: ${breakpoints.tabletPortrait + `px`};
    width: calc(100% - ${rem(32)});
  }
  @media only screen and (min-width: ${breakpoints.tablet + `px`}) {
    max-width: ${breakpoints.tablet + `px`};
  }
  
`;
