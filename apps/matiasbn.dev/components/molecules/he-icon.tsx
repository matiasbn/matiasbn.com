import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';
import HeroIconText from '@atoms/he-icon-text';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div``;

export default function HeroIcon(props: Props) {
  return (
    <Wrapper>
      <HeroIconText>{'</>'}</HeroIconText>
    </Wrapper>
  );
}
