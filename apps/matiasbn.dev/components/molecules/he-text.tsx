import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';
import HeroTextTitle from '@atoms/he-text-title';
import HeroTextSubtitle from '@atoms/he-text-subtitle';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div``;

export default function HeroText(props: Props) {
  return (
    <Wrapper>
      <HeroTextTitle>Hi, I'm Matías.</HeroTextTitle>
      <HeroTextSubtitle>Fullstack JS Developer</HeroTextSubtitle>
      <HeroTextSubtitle>Computers Engineer</HeroTextSubtitle>
      <HeroTextSubtitle>Blockchain Mentor</HeroTextSubtitle>
    </Wrapper>
  );
}
