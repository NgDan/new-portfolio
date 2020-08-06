import React from 'react';
import { Wrapper } from './components/Wrapper';
import { Header, Name, Job, Icon } from './components/Header';
import Skills from './components/skills/Skills';
function App() {
  return (
    <Wrapper>
      <Header>
        <Name>Dan Negrusa</Name>
        <Job>Web developer</Job>
        <Skills />
      </Header>
    </Wrapper>
  );
}

export default App;
