import React from 'react';
import styled from 'styled-components';

type Props = {};

const Wrapper = styled.div`
  background: black;
  height: 500px;
`;

const Title = styled.div`
  color: white;
`;
const Icon = styled.div``;

export default function Hero({}: Props) {
  return (
    <Wrapper>
      <Title>
        Computers Engineer, Fullstack JS Developer and Blockchain Mentor
      </Title>
    </Wrapper>
  );
}
