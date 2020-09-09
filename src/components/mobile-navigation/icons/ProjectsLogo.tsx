import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import colors from '../../../constants/colors';
import IIconsProps from './icons.types';

const ProjectsSvg = styled.svg`
  width: ${rem(30)};
  height: ${rem(30)};
`;
function ProjectsLogo({ isVisible, distFromTop }: IIconsProps): ReactElement {
  const fill = isVisible ? colors.veryDarkNavy : colors.veryLightgrey;
  return (
    <ProjectsSvg
      width='512'
      height='512'
      viewBox='0 0 512 512'
      onClick={() => {
        window.scrollTo({ left: 0, top: distFromTop, behavior: 'smooth' });
      }}
    >
      <path
        fill={fill}
        d='M143 224c0-8.284-6.716-15-15-15H48c-8.284 0-15 6.716-15 15v49h110zM359 303v144h138c8.284 0 15-6.716 15-15V318c0-8.284-6.716-15-15-15zM0 318v114c0 8.284 6.716 15 15 15h314V303H15c-8.284 0-15 6.716-15 15zM479 128V80c0-8.284-6.716-15-15-15h-80c-8.284 0-15 6.716-15 15v48zM177 173v100h335V173c0-8.284-6.716-15-15-15H192c-8.284 0-15 6.716-15 15zM319 128V80c0-8.284-6.716-15-15-15h-80c-8.284 0-15 6.716-15 15v48z'
      />
    </ProjectsSvg>
  );
}

export default ProjectsLogo;
