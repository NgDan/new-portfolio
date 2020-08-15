import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
const SplitSvg = styled.svg`
  width: ${rem(32)};
  height: ${rem(32)};
`;
export default function SplitLogo() {
  return (
    <SplitSvg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-logo'
      viewBox='-5 -5 120 100'
    >
      <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
        <g transform='translate(-12.453 -.484)'>
          <g transform='rotate(-30 84.749 22.111)'>
            <path
              fill='#67C7FF'
              d='M40.6414493 83.2525092L63.1555675 83.2524261 74.1304124 83.2533241 85.1024071 64.2462616 59.0205466 19.0711541 37.0797234 19.0801135 63.1555675 64.2468686 10.9918465 64.2468686 0.0291940249 83.2526584 40.6414493 83.2525092 29.6688748 64.2474524 51.6148707 64.2474524 40.6418728 83.2532422z'
            ></path>
            <path
              fill='#1F8CEB'
              d='M59.0205393 19.079957L77.7022797 19.079957 88.6649321 0.0741670952 25.5385586 0.0743990989 14.5637142 0.0735008917 3.59171904 19.0805636 29.6735796 64.2556715 51.6144026 64.2467117 25.5385586 19.079957 37.0784192 19.079957 48.0494791 0.0775237434z'
            ></path>
            <path
              fill='#1B73C0'
              d='M40.6418728 64.2474541L51.6148707 83.2532439 29.6688748 83.2532439z'
              transform='matrix(1 0 0 -1 0 147.5)'
            ></path>
            <path
              fill='#1B73C0'
              d='M48.0494791 0.0775237434L59.0224769 19.0833137 37.0764812 19.0833137z'
            ></path>
          </g>
        </g>
      </g>
    </SplitSvg>
  );
}
