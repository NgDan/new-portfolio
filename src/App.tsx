import React, { useEffect, useState } from 'react';
import { Wrapper } from './components/Wrapper';
import { Header } from './components/Header';
import Skills from './components/skills/Skills';
import MainCard from './components/main-card/MainCard';
import AboutMe from './components/about-me/AboutMe';
import PersonalDetails from './components/personal-details/PersonalDetails';
import MobileNavigation from './components/mobile-navigation/MobileNavigation';

export default function App() {
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25,
      trackVisibility: true,
      delay: 100,
    };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0] as any;
      console.log(entry);
      const isVisible = entry.isVisible;
      setIsExperienceVisible(isVisible);
    }, options);
    const target = document.querySelector('#experience');
    if (target != null) {
      observer.observe(target);
    }
    console.log(target);
  }, []);
  useEffect(() => {
    console.log('isExperienceVisible: ', isExperienceVisible);
  }, [isExperienceVisible]);
  return (
    <Wrapper>
      <Header>
        <PersonalDetails />
        <Skills />
      </Header>
      <AboutMe />
      <MainCard />
      <MobileNavigation />
    </Wrapper>
  );
}
