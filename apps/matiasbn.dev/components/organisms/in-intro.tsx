import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends AllHTMLAttributes<{}> {
}

const Wrapper = styled.div``;

export default function Intro(props: Props) {
  return (
    <Wrapper></Wrapper>
  );
}
