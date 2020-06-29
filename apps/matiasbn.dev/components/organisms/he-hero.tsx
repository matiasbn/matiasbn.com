import React from 'react';
import styled from 'styled-components';
import HeroTitle from '@atoms/he-title';
import HeroIcon from '@atoms/he-icon';
import HeroSubtitle from '@atoms/he-subtitle';

type Props = {};

const Wrapper = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 95vh;

  @media (orientation: landscape) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
  }

  @media (orientation: portrait) {
    width: 100vw;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
  }
`;

const ContainerTitle = styled.div`
  @media (orientation: portrait) {
    display: grid;
    grid-auto-rows: auto;
  }
`;

const ContainerIcon = styled.div`
  align-self: flex-start;
`;

export default function Hero({}: Props) {
  return (
    <Wrapper>
      <ContainerTitle>
        <HeroTitle>Hi, I'm Matías.</HeroTitle>
        <HeroSubtitle>
          Fullstack JS Developer/ Computers Engineer/ Blockchain Mentor
        </HeroSubtitle>
      </ContainerTitle>
      <ContainerIcon>
        <HeroIcon>{'</>'}</HeroIcon>
      </ContainerIcon>
    </Wrapper>
  );
}
