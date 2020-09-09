import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import colors from '../../../constants/colors';
import IIconsProps from './icons.types';

const ExperienceSvg = styled.svg`
  width: ${rem(30)};
  height: ${rem(30)};
`;
function ExperienceLogo({ isVisible, distFromTop }: IIconsProps): ReactElement {
  const fill = isVisible ? colors.veryDarkNavy : colors.veryLightgrey;
  return (
    <ExperienceSvg
      width='512'
      height='512'
      viewBox='0 0 512 512'
      onClick={() => {
        window.scrollTo({ left: 0, top: distFromTop, behavior: 'smooth' });
      }}
    >
      <path
        fill={fill}
        d='M106 512h300c24.814 0 45-20.186 45-45V150H346c-24.814 0-45-20.186-45-45V0H106C81.186 0 61 20.186 61 45v422c0 24.814 20.186 45 45 45zm60-301h180c8.291 0 15 6.709 15 15s-6.709 15-15 15H166c-8.291 0-15-6.709-15-15s6.709-15 15-15zm0 60h180c8.291 0 15 6.709 15 15s-6.709 15-15 15H166c-8.291 0-15-6.709-15-15s6.709-15 15-15zm0 60h180c8.291 0 15 6.709 15 15s-6.709 15-15 15H166c-8.291 0-15-6.709-15-15s6.709-15 15-15zm0 60h120c8.291 0 15 6.709 15 15s-6.709 15-15 15H166c-8.291 0-15-6.709-15-15s6.709-15 15-15z'
      />
      <path
        fill={fill}
        d='M346 120h96.211L331 8.789V105c0 8.276 6.724 15 15 15z'
      />
    </ExperienceSvg>
  );
}

export default ExperienceLogo;
