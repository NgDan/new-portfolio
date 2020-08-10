import styled from 'styled-components';
import { rem } from 'polished';
import colours from '../../constants/colours';

export const Title = styled.p`
  padding: 0 ${rem(16)};
  font-size: ${rem(22)};
  margin: ${rem(8)} 0 ${rem(16)} 0;
  color: ${colours.darkNavy};
  font-weight: 600;
`;
