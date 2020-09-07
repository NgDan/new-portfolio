import React from 'react';
import { Container, NavItem } from './MobileNavigation.styles';
import useIsElemInViewport from '../../hooks/useIsElemInViewport';
import DetailsLogo from './icons/DetailsLogo';
import AboutMeLogo from './icons/AboutMeLogo';
import ExperienceLogo from './icons/ExperienceLogo';
import ProjectsLogo from './icons/ProjectsLogo';

const MobileNavigation = () => {
  const {
    isInViewport: isDetails,
    distFromTop: detailsDistFromTop,
  } = useIsElemInViewport('details', 40);
  const {
    isInViewport: isAboutMe,
    distFromTop: aboutMeDistFromTop,
  } = useIsElemInViewport('about-me', 40);
  const {
    isInViewport: isExperience,
    distFromTop: experienceDistFromTop,
  } = useIsElemInViewport('experience', 40);
  const {
    isInViewport: isProjects,
    distFromTop: dpojectsDistFromTop,
  } = useIsElemInViewport('projects', 40);
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
      <DetailsLogo
        isVisible={sectionsVisibility[0]}
        distFromTop={detailsDistFromTop}
      />
      <AboutMeLogo
        isVisible={sectionsVisibility[1]}
        distFromTop={aboutMeDistFromTop}
      />
      <ExperienceLogo
        isVisible={sectionsVisibility[2]}
        distFromTop={experienceDistFromTop}
      />
      <ProjectsLogo
        isVisible={sectionsVisibility[3]}
        distFromTop={dpojectsDistFromTop}
      />
    </Container>
  );
};
export default MobileNavigation;
