import styled from 'styled-components';
import { rem } from 'polished';
import colours from '../../constants/colours';

export const Container = styled.div`
  padding: ${rem(16)};
  background-color: ${colours.darkNavy};
  color: ${colours.veryLightGrey};
  border-radius: ${rem(48)} ${rem(48)} 0 0;
  width: 100%;
`;
