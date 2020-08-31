import styled from 'styled-components';
import Image from './DijkstraImage';
import { rem } from 'polished';

export const DijkstraImage = styled.div`
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 50%;
  width: 100%;
  height: ${rem(100)};
`;
