import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';
import ResumeHero from '@molecules/re-hero';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div``;

export default function Resume(props: Props) {
  return (
    <Wrapper>
      <ResumeHero></ResumeHero>
    </Wrapper>
  );
}
