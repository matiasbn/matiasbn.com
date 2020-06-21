import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';
import DisclaimerMessage from '@molecules/DisclaimerMessage';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div`
  margin: 20px;
`;

export default function Disclaimer(props: Props) {
  return (
    <Wrapper>
      <DisclaimerMessage />
    </Wrapper>
  );
}
