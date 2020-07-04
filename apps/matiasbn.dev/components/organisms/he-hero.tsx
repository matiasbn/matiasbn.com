import React from 'react';
import styled from 'styled-components';
import HeroText from '@molecules/he-text';
import HeroIcon from '@molecules/he-icon';
import breakpoints from '@utils/breakpoints';

type Props = {};

const Wrapper = styled.div`
  background: #282828;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: center;
  height: auto;
  width: 100%;
`;

const ContainerText = styled.div`
  height: auto;
  align-self: start;
  padding-top: 8rem;
  @media (${breakpoints.desktop.min}) {
    //padding-top: 0;
    align-self: start;
  }
`;

export default function Hero({}: Props) {
  return (
    <Wrapper>
      <ContainerText>
        <HeroText />
      </ContainerText>
      <HeroIcon />
    </Wrapper>
  );
}
