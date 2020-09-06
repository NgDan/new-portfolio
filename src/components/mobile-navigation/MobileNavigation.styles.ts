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
  box-shadow: 0 ${rem(1)} ${rem(8)} rgba(0, 0, 0, 0.8);
`;

export const NavItem = styled.div<{ isVisible?: boolean }>`
  width: ${rem(20)};
  height: ${rem(20)};
  background-color: ${({ isVisible }) => (isVisible ? 'red' : 'black')};
`;
