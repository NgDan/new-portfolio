import styled from 'styled-components';
import { rem } from 'polished';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  padding-bottom: ${rem(8)};
  border-bottom: ${rem(2)} solid ${colors.darkNavy};
  @media only screen and (min-width: ${breakpoints.tabletPortrait + `px`}) {
  }
`;

export const Name = styled.h1`
  margin: ${rem(8)} 0 0 0;
  font-weight: 400;
  color: ${colors.darkNavy};
  font-size: ${rem(24)};
`;

export const Job = styled.h1`
  margin: 0 0 0 ${rem(10)};
  color: ${colors.darkNavy};
  font-weight: 300;
  font-size: ${rem(24)};
`;
