import React from 'react';
import {
  Container,
  Skill,
  SkillName,
  SkillWrapper,
  Disclaimer,
  Title,
} from './Skills.styles';
import ReactLogo from './icons/ReactLogo';
import JsLogo from './icons/JsLogo';
import CssLogo from './icons/CssLogo';
import TsLogo from './icons/TsLogo';
import NodeJsLogo from './icons/NodeJsLogo';
import ReduxLogo from './icons/ReduxLogo';
import JestLogo from './icons/JestLogo';
import SplitLogo from './icons/SplitLogo';
import AwsLogo from './icons/AwsLogo';
import DockerLogo from './icons/DockerLogo';

const Skills = () => (
  <div>
    <Title>Technologies I've worked with</Title>
    <Container>
      <SkillWrapper>
        <Skill color='#61dafb'>
          <ReactLogo />
        </Skill>
        <SkillName>React</SkillName>
      </SkillWrapper>
      <SkillWrapper>
        <Skill color='#fdd83c'>
          <JsLogo />
        </Skill>
        <SkillName>Javascript</SkillName>
      </SkillWrapper>
      <SkillWrapper>
        <Skill color='#fdd83c'>
          <CssLogo />
        </Skill>
        <SkillName>CSS</SkillName>
      </SkillWrapper>
      <SkillWrapper>
        <Skill color='#fdd83c'>
          <TsLogo />
        </Skill>
        <SkillName>Typescript</SkillName>
      </SkillWrapper>
      <SkillWrapper>
        <Skill color='#fdd83c'>
          <NodeJsLogo />
        </Skill>
        <SkillName>NodeJs</SkillName>
      </SkillWrapper>
      <SkillWrapper>
        <Skill color='#fdd83c'>
          <ReduxLogo />
        </Skill>
        <SkillName>Redux</SkillName>
      </SkillWrapper>
      <SkillWrapper>
        <Skill color='#fdd83c'>
          <JestLogo />
        </Skill>
        <SkillName>Jest</SkillName>
      </SkillWrapper>
      <SkillWrapper>
        <Skill color='#fdd83c'>
          <SplitLogo />
        </Skill>
        <SkillName>Split</SkillName>
      </SkillWrapper>
      <SkillWrapper>
        <Skill color='#fdd83c'>
          <AwsLogo />
        </Skill>
        <SkillName>AWS</SkillName>
      </SkillWrapper>
      <SkillWrapper>
        <Skill color='#fdd83c'>
          <DockerLogo />
        </Skill>
        <SkillName>Docker</SkillName>
      </SkillWrapper>
    </Container>
  </div>
);
export default Skills;
