import styled from 'styled-components';
import { rem } from 'polished';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';

export const Title = styled.p`
  padding: 0 ${rem(16)};
  font-size: ${rem(22)};
  margin: ${rem(8)} 0 ${rem(8)} 0;
  color: white;
  font-weight: 600;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  @media only screen and (min-width: ${breakpoints.tabletPortrait + `px`}) {
    flex-flow: row;
    justify-content: space-between;
  }
`;
