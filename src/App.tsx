import React from 'react';
import { Wrapper } from './components/Wrapper';
import { Header } from './components/Header';
import Skills from './components/skills/Skills';
import MainCard from './components/main-card/MainCard';
import AboutMe from './components/about-me/AboutMe';
import PersonalDetails from './components/personal-details/PersonalDetails';

export default function App() {
  return (
    <Wrapper>
      <Header>
        <PersonalDetails />
        <Skills />
      </Header>
      <AboutMe />
      <MainCard />
    </Wrapper>
  );
}
