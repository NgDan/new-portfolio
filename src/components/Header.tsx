import styled from 'styled-components';
import breakpoints from '../constants/breakpoints';
import colours from '../constants/colours';
import { rem } from 'polished';

export const Header = styled.div`
  display: flex;
  flex-flow: column;
  padding: ${rem(16)};
  justify-content: center;
  align-items: center;
`;
export const Name = styled.h1`
  margin: ${rem(8)} 0 0 0;
`;
export const Job = styled.h3`
  margin: 0;
  color: ${colours.lightGrey};
`;
// rgba(97, 218, 251, 1)

export const Icon = styled.svg``;
