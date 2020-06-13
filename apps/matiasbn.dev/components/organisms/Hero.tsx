import React from 'react';
import styled from 'styled-components';

type Props = {};

const Wrapper = styled.div`
  background: black;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Title = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  padding: 30px;
`;

const Icon = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 200px;
`;

export default function Hero({}: Props) {
  return (
    <Wrapper>
      <Title>
        Computers Engineer, Fullstack JS Developer and Blockchain Mentor
      </Title>
      <Icon>{'</>'}</Icon>
    </Wrapper>
  );
}
