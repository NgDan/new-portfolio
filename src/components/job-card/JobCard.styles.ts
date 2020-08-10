import styled from 'styled-components';
import colours from '../../constants/colours';
import { rem } from 'polished';

export const Container = styled.div`
  width: 100%;
  padding: ${rem(16)};
  background-color: ${colours.navy};
  border-radius: ${rem(12)};
`;

export const Title = styled.p`
  font-size: ${rem(14)};
  margin: 0;
`;

export const Date = styled.p`
  font-size: ${rem(12)};
  margin: ${rem(4)} 0 0 0;
  border-bottom: ${rem(2)} solid ${colours.darkNavy};
  padding-bottom: ${rem(12)};
`;
