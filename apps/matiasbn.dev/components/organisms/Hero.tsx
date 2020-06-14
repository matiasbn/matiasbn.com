import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '@utils';
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
  text-align: center;
  font-size: 4vw;
  max-height: 100%;
  h1 {
    margin: 0;
  }

  @media (min-width: 30rem) {
    font-size: 2.5vh;
  }

  @media (min-width: 37.5rem) {
    font-size: 2vh;
  }

  @media (min-width: 50rem) {
    font-size: 3vh;
  }
`;

const ContainerIcon = styled.div`
  margin: 0;
  color: white;
  text-align: center;
  font-size: 28vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  h1 {
    margin: 0;
  }

  @media (min-width: 37.5rem) {
    font-size: 10rem;
  }

  @media (min-width: 50rem) {
    font-size: 8rem;
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
