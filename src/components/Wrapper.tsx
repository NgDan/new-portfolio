import styled from 'styled-components';
import breakpoints from '../constants/breakpoints';

export const Wrapper = styled.div`
  /* @media only screen and (max-width: ${breakpoints.tabletPortrait + `px`}) {
  } */

  background-position: 100px -102px;
  background-size: 130%;
  margin:auto;
  width: 100%;
  @media only screen and (min-width: ${breakpoints.tabletPortrait + `px`}) {
    max-width: ${breakpoints.tabletPortrait + `px`};
  }
  @media only screen and (min-width: ${breakpoints.tablet + `px`}) {
    max-width: ${breakpoints.tablet + `px`};
  }
  
`;
