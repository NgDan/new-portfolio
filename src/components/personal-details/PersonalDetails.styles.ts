import styled from 'styled-components';
import { rem } from 'polished';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  flex-direction: column;
  padding-bottom: ${rem(12)};
  border-bottom: ${rem(2)} solid ${colors.veryDarkNavy};
  justify-content: space-between;

  @media only screen and (min-width: ${breakpoints.mobile + `px`}) {
    flex-direction: row;
  }
`;

export const Name = styled.h1`
  margin: ${rem(8)} 0 0 0;
  font-weight: 400;
  color: ${colors.veryDarkNavy};
  font-size: ${rem(24)};
  justify-self: flex-start;
  width: 100%;
`;

export const Phone = styled.a`
  color: ${colors.veryDarkNavy};
  font-weight: 300;
  font-size: ${rem(16)};
  margin-top: ${rem(8)};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Email = styled.a`
  color: ${colors.veryDarkNavy};
  font-weight: 300;
  font-size: ${rem(16)};
  margin-top: ${rem(4)};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const GitHub = styled.a`
  color: ${colors.veryDarkNavy};
  font-weight: 300;
  font-size: ${rem(16)};
  margin-top: ${rem(4)};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
