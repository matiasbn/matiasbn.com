import React from 'react';
import styled from 'styled-components';
import HeroTitle from '@atoms/he-title';
import HeroIcon from '@atoms/he-icon';
type Props = {};

const Wrapper = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 90vh;

  @media (orientation: landscape) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
  }

  @media (min-height: 900px) {
    height: 93vh;
  }
`;

export default function Hero({}: Props) {
  return (
    <Wrapper>
      <HeroTitle>
        Computers Engineer, Fullstack JS Developer and Blockchain Mentor
      </HeroTitle>
      <HeroIcon>{'</>'}</HeroIcon>
    </Wrapper>
  );
}
