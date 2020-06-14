import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '@matiasbn.dev/utils';
type Props = {};

const Wrapper = styled.div`
  background: black;
  display: grid;
  grid-template-rows: 3fr 7fr;
  justify-content: center;
  align-content: center;
  height: 90vh;
`;

const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: white;
  font-size: 4vw;
  text-align: center;
  h1 {
    margin: 0;
  }
`;

const ContainerIcon = styled.div`
  margin: 0;
  color: white;
  text-align: center;
  font-size: 25vw;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    margin: 0;
  }
`;

export default function Hero({}: Props) {
  return (
    <Wrapper>
      <ContainerTitle>
        <h1>
          {'Computers Engineer, Fullstack JS Developer and Blockchain Mentor'}
        </h1>
      </ContainerTitle>
      <ContainerIcon>
        <h1>{'</>'}</h1>
      </ContainerIcon>
    </Wrapper>
  );
}
