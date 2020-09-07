import React from 'react';
import { Wrapper } from './components/Wrapper';
import { Header } from './components/Header';
import Skills from './components/skills/Skills';
import MainCard from './components/main-card/MainCard';
import AboutMe from './components/about-me/AboutMe';
import PersonalDetails from './components/personal-details/PersonalDetails';
import MobileNavigation from './components/mobile-navigation/MobileNavigation';
import useWindowSize from './hooks/useWindowSize';
import breakpoints from './constants/breakpoints';

export default function App() {
  const { width } = useWindowSize();
  console.log({ width });

  let showMobileNav;
  if (typeof width === 'number') {
    showMobileNav = width < breakpoints.mobile;
  } else {
    showMobileNav = false;
  }
  return (
    <Wrapper>
      <Header id='details'>
        <PersonalDetails />
        <Skills />
      </Header>
      <AboutMe />
      <MainCard />
      {showMobileNav ? <MobileNavigation /> : null}
    </Wrapper>
  );
}
