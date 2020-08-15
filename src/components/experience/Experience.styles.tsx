import styled from 'styled-components';
import { rem } from 'polished';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';

export const Title = styled.p`
  padding: 0 ${rem(16)};
  font-size: ${rem(22)};
  color: white;
  font-weight: 600;
  margin: ${rem(20)} 0 0rem 0;
  &:first-of-type {
    margin: ${rem(8)} 0 0 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  @media only screen and (min-width: ${breakpoints.tabletPortrait + `px`}) {
    flex-flow: row;
    justify-content: space-between;
  }
`;
