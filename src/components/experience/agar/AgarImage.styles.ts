import styled from 'styled-components';
import Image from './AgarImage';
import { rem } from 'polished';

export const AgarImage = styled.div`
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: ${rem(100)};
`;
