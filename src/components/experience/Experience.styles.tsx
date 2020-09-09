import styled from 'styled-components';
import { rem } from 'polished';
import breakpoints from '../../constants/breakpoints';

export const Title = styled.p`
  padding: ${rem(8)} ${rem(16)} ${rem(0)} ${rem(16)};
  font-size: ${rem(20)};
  color: white;
  font-weight: 600;
  margin: ${rem(20)} 0 0rem 0;
  &:first-of-type {
    margin: ${rem(8)} 0 0 0;
  }
`;

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  @media only screen and (min-width: ${breakpoints.tabletPortrait + `px`}) {
    flex-flow: row;
    justify-content: space-between;
  }
`;
