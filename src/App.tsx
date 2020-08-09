import React from 'react';
import { Wrapper } from './components/Wrapper';
import { Header, Name, Job } from './components/Header';
import Skills from './components/skills/Skills';
import MainCard from './components/main-card/MainCard';
export default function App() {
  return (
    <Wrapper>
      <Header>
        <Name>Lorem ipsum</Name>
        <Job>Lorem ipsum</Job>
        <Skills />
      </Header>
      <MainCard />
    </Wrapper>
  );
}
