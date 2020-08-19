import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import colors from '../../../constants/colors';

const EmailSvg = styled.svg`
  display: inline-block;
  width: ${rem(16)};
  margin-right: ${rem(8)};
  fill: ${colors.darkNavy};
  position: relative;
  top: ${rem(3)};
`;

function EmailLogo() {
  return (
    <EmailSvg
      enableBackground='new 0 0 512 512'
      version='1.1'
      viewBox='0 0 512 512'
      xmlSpace='preserve'
    >
      <path d='M43.52 76.8L256 225.28 468.48 76.8z'></path>
      <path d='M268.8 276.48c-7.68 5.12-20.48 5.12-28.16 0L0 107.52V409.6c0 12.8 12.8 25.6 25.6 25.6h460.8c12.8 0 25.6-12.8 25.6-25.6V107.52L268.8 276.48z'></path>
    </EmailSvg>
  );
}

export default EmailLogo;
