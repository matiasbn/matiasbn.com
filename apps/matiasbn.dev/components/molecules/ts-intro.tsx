import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';
import TechStackIntroTitle from '@atoms/ts-intro-title';
import TechStackIntroSubttile from '@atoms/ts-intro-subtitle';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  text-align: center;
  align-items: center;
  justify-items: center;
  padding: 3rem;
  padding-top: 7rem;
  background: #282828;
  width: 100%;
  height: 100%;
`;

export default function TechStackIntro(props: Props) {
  return (
    <Wrapper>
      <TechStackIntroTitle>This is my 🧰</TechStackIntroTitle>
      <TechStackIntroSubttile>
        Here i try to collect all the tools that I have used throughout my
        career.
      </TechStackIntroSubttile>
    </Wrapper>
  );
}
