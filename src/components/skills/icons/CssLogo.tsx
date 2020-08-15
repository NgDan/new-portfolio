import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
const CssSvg = styled.svg`
  width: ${rem(28)};
  height: ${rem(28)};
  position: relative;
`;
export default function CssLogo() {
  return (
    <CssSvg
      xmlns='http://www.w3.org/2000/svg'
      x='0'
      y='0'
      enableBackground='new 0 0 512 512'
      version='1.1'
      viewBox='0 0 512 512'
      xmlSpace='preserve'
    >
      <path
        fill='#2196F3'
        d='M32 0L72.8 460.8 256 512 439.136 460.832 480 0z'
      ></path>
      <path
        fill='#FAFAFA'
        d='M392.768 150.688L387.616 208.576 372.064 382.112 256 414.208 255.904 414.24 139.904 382.112 131.808 291.36 188.64 291.36 192.864 338.432 255.936 355.456 255.968 355.424 319.136 338.4 327.744 259.968 129.088 260.512 123.456 206.88 332.512 204.416 336.736 147.008 117.856 147.616 114.176 94.208 256 94.208 397.824 94.208z'
      ></path>
    </CssSvg>
  );
}
