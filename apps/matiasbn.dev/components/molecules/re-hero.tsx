import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';
import ResumeHeroImage from '@atoms/re-hero-image';
import ResumeHeroTitle from '@atoms/re-hero-title';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export default function ResumeHero(props: Props) {
  return (
    <Wrapper>
      <ResumeHeroImage></ResumeHeroImage>
      <ResumeHeroTitle>Hola</ResumeHeroTitle>
    </Wrapper>
  );
}
