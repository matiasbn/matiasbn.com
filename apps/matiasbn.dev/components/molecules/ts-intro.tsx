import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';
import TechStackIntroTitle from '@atoms/ts-intro-title';
import TechStackIntroSubttile from '@atoms/ts-intro-subtitle';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div`
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
  text-align: center;
  align-items: center;
  justify-items: center;
  padding: 30px;
  background: #282828;
  width: 100%;
`;

export default function TechStackIntro(props: Props) {
  return (
    <Wrapper>
      <TechStackIntroTitle>This is my 🧰</TechStackIntroTitle>
      <TechStackIntroSubttile>
        Here I try to collect all the tools that I have used throughout my
        career.
      </TechStackIntroSubttile>
    </Wrapper>
  );
}
