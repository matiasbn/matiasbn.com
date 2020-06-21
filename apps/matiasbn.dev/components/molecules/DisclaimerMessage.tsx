import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';
import DisclaimerTitle from '@atoms/DisclaimerTitle';
import DisclaimerSubtitle from '@atoms/DisclaimerSubtitle';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: 20px;

  @media (orientation: landscape) {
    display: none;
  }
`;

export default function DisclaimerMessage(props: Props) {
  return (
    <Wrapper>
      <DisclaimerTitle>
        This page is optimized for landscape orientation
      </DisclaimerTitle>
      <DisclaimerSubtitle>
        Turn your device on landscape to see the rest of the page
      </DisclaimerSubtitle>
    </Wrapper>
  );
}
