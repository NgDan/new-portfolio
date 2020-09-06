import React, { useRef, MutableRefObject, useEffect, useState } from 'react';
import { Container, NavItem } from './MobileNavigation.styles';
import throttle from 'lodash/throttle';
import useIsElemInViewport from '../../hooks/useIsElemInViewport';

const MobileNavigation = () => {
  const isDetailsInViewport = useIsElemInViewport('details', 20);
  const isAboutMeInViewport = useIsElemInViewport('about-me', 20);
  const isExperienceInViewport = useIsElemInViewport('experience', 20);
  const isProjectsInViewport = useIsElemInViewport('projects', 20);
  console.log({ isExperienceInViewport, isProjectsInViewport });

  return (
    <Container>
      <NavItem isVisible={isDetailsInViewport} />
      <NavItem isVisible={isAboutMeInViewport} />
      <NavItem isVisible={isExperienceInViewport} />
      <NavItem isVisible={isProjectsInViewport} />
    </Container>
  );
};
export default MobileNavigation;
