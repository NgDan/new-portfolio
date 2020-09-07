import React from 'react';
import { Container, NavItem } from './MobileNavigation.styles';

import useIsElemInViewport from '../../hooks/useIsElemInViewport';

const MobileNavigation = () => {
  const isDetails = useIsElemInViewport('details', 40);
  const isAboutMe = useIsElemInViewport('about-me', 40);
  const isExperience = useIsElemInViewport('experience', 40);
  const isProjects = useIsElemInViewport('projects', 40);
  const sectionsVisibility = [isDetails, isAboutMe, isExperience, isProjects];

  // keeps only the last true elem in array as true
  let foundLastVisibleElem = false;
  for (let i = sectionsVisibility.length - 1; i >= 0; i--) {
    if (foundLastVisibleElem) {
      sectionsVisibility[i] = false;
    }
    if (sectionsVisibility[i]) {
      foundLastVisibleElem = true;
    }
  }

  return (
    <Container>
      <NavItem isVisible={sectionsVisibility[0]} />
      <NavItem isVisible={sectionsVisibility[1]} />
      <NavItem isVisible={sectionsVisibility[2]} />
      <NavItem isVisible={sectionsVisibility[3]} />
    </Container>
  );
};
export default MobileNavigation;
