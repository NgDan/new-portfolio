import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import colors from '../../../constants/colors';

const PhoneSvg = styled.svg`
  display: inline-block;
  width: ${rem(16)};
  margin-right: ${rem(8)};
  fill: ${colors.darkNavy};
  position: relative;
  top: ${rem(2)};
`;

function PhoneLogo() {
  return (
    <PhoneSvg
      x='0'
      y='0'
      enableBackground='new 0 0 405.333 405.333'
      viewBox='0 0 405.333 405.333'
      xmlSpace='preserve'
    >
      <path d='M373.333 266.88c-25.003 0-49.493-3.904-72.704-11.563-11.328-3.904-24.192-.896-31.637 6.699l-46.016 34.752c-52.8-28.181-86.592-61.952-114.389-114.368l33.813-44.928c8.512-8.512 11.563-20.971 7.915-32.64-7.723-23.36-11.648-47.872-11.648-72.832 0-17.643-14.357-32-32-32H32C14.357 0 0 14.357 0 32c0 205.845 167.488 373.333 373.333 373.333 17.643 0 32-14.357 32-32V298.88c0-17.643-14.357-32-32-32z'></path>
    </PhoneSvg>
  );
}

export default PhoneLogo;
