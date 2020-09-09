import React from 'react';
import { Container } from './MobileNavigation.styles';
import useIsElemInViewport from '../../hooks/useIsElemInViewport';
import DetailsLogo from './icons/DetailsLogo';
import AboutMeLogo from './icons/AboutMeLogo';
import ExperienceLogo from './icons/ExperienceLogo';
import ProjectsLogo from './icons/ProjectsLogo';
import replaceAllItemsWithFalseExceptLastOne from '../../helpers/replaceAllItemsWithFalseExceptLastOne';

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
  const filteredSectionsVisibility = replaceAllItemsWithFalseExceptLastOne(
    sectionsVisibility
  );

  return (
    <Container>
      <DetailsLogo
        isVisible={filteredSectionsVisibility[0]}
        distFromTop={detailsDistFromTop}
      />
      <AboutMeLogo
        isVisible={filteredSectionsVisibility[1]}
        distFromTop={aboutMeDistFromTop}
      />
      <ExperienceLogo
        isVisible={filteredSectionsVisibility[2]}
        distFromTop={experienceDistFromTop}
      />
      <ProjectsLogo
        isVisible={filteredSectionsVisibility[3]}
        distFromTop={dpojectsDistFromTop}
      />
    </Container>
  );
};
export default MobileNavigation;
