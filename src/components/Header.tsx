import styled from 'styled-components';
import breakpoints from '../constants/breakpoints';
import { rem } from 'polished';

export const Header = styled.div`
  padding: ${rem(16)};
  @media only screen and (min-width: ${breakpoints.tabletPortrait + `px`}) {
    padding: ${rem(16)} ${rem(0)};
  }
`;

export const Icon = styled.svg``;
