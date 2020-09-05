import styled from 'styled-components';
import { rem } from 'polished';
export const Container = styled.nav`
  position: sticky;
  bottom: 0;
  width: 100%;
  padding: ${rem(16)} 0;
  background-color: white;
  display: flex;
  justify-content: space-around;
`;

export const NavItem = styled.div`
  width: ${rem(20)};
  height: ${rem(20)};
  background-color: black;
`;
