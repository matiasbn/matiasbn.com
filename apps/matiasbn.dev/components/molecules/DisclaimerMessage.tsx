import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';
import DisclaimerTitle from '@atoms/DisclaimerTitle';
import DisclaimerSubtitle from '@atoms/DisclaimerSubtitle';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;

  .subtitle {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: auto max-content auto;
    grid-column-gap: 10px;
  }
  .portrait {
    justify-self: end;
  }
  .landscape {
    justify-self: start;
  }

  @media (orientation: landscape) {
    display: none;
  }
`;

export default function DisclaimerMessage(props: Props) {
  return (
    <Wrapper>
      <DisclaimerTitle>Please use landscape orientation</DisclaimerTitle>
      <div className={'subtitle'}>
        <DisclaimerSubtitle className={'portrait'}>📱️</DisclaimerSubtitle>
        <DisclaimerSubtitle className={'arrow'} fontSize={'20px'}>
          ➡️
        </DisclaimerSubtitle>
        <DisclaimerSubtitle className={'landscape'} rotate fontSize={'50px'}>
          📱️
        </DisclaimerSubtitle>
      </div>
    </Wrapper>
  );
}
