import styled from 'styled-components';
import { rem } from 'polished';
import colors from '../../constants/colors';
import BackgroundPattern from '../skills/icons/BackgroundPattern';

export const Container = styled.div`
  padding: ${rem(8)} ${rem(16)} ${rem(16)} ${rem(16)};
  background-color: ${colors.darkNavy};
  border-radius: ${rem(48)} ${rem(48)} 0 0;
  width: 100%;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.7);
  margin-top: ${rem(16)};
  background-image: ${BackgroundPattern};
`;
