import React from 'react';
import styled from 'styled-components';
import HeroTitle from '@atoms/he-title';
import HeroIcon from '@atoms/he-icon';
import HeroSubtitle from '@atoms/he-subtitle';
import breakpoints from '@utils/breakpoints';

type Props = {};

const Wrapper = styled.div`
  background: #282828;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 90vh;
  width: 100%;

  @media (orientation: landscape) {
    height: 100vh;
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

  @media (${breakpoints.desktop.landscape.min}) {
  }
`;

const ContainerTitle = styled.div`
  .landscape {
    font-size: 20px;
  }
  .landscape p {
    margin: 0px;
  }

  @media (${breakpoints.smallPhone.landscape
      .max}) and (orientation: landscape) {
    .landscape {
      font-size: 15px;
    }
  }

  @media (${breakpoints.tablet.portrait.min}) and (orientation: portrait) {
    .landscape {
      font-size: 30px;
    }
  }

  @media (orientation: portrait) {
    display: grid;
    grid-auto-rows: auto;
    .landscape {
      display: none;
    }
  }
  @media (orientation: landscape) {
    .portrait {
      display: none;
    }
  }
`;

const ContainerIcon = styled.div`
  align-self: flex-start;
  @media (orientation: landscape) {
    align-self: center;
  }
`;

export default function Hero({}: Props) {
  return (
    <Wrapper>
      <ContainerTitle>
        <HeroTitle>Hi, I'm Matías.</HeroTitle>
        <HeroSubtitle>
          <div className={'landscape'}>
            <p>Fullstack JS Developer</p>
            <p>Computers Engineer</p>
            <p>Blockchain Mentor</p>
          </div>
          <div className={'portrait'}>
            Fullstack JS Developer / Computers Engineer / Blockchain Mentor
          </div>
        </HeroSubtitle>
      </ContainerTitle>
      <ContainerIcon>
        <HeroIcon>{'</>'}</HeroIcon>
      </ContainerIcon>
    </Wrapper>
  );
}
