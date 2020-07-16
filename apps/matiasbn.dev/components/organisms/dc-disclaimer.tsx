import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';
import DisclaimerMessage from '@molecules/dc-message';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div``;

export default function Disclaimer(props: Props) {
  return (
    <Wrapper>
      <DisclaimerMessage />
    </Wrapper>
  );
}
