import React from 'react';
import styled from 'styled-components';
import BrandText from '@atoms/BrandText';
import NavbarMenu from '@molecules/NavbarMenu';
import Button from '@atoms/Button';
import { breakpoints } from '@utils';

type Props = {};

const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: 40% 35% 25%;
  justify-items: center;
  align-items: center;
`;

const BrandContainer = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  font-size: 2.5vw;

  @media (min-width: 35rem) {
    font-size: 1.5vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding-left: 20px;
  }
`;
const BarMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media (min-width: 35rem) {
    font-size: 2vh;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
  @media (min-width: 75rem) {
    font-size: 1.5vw;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  font-size: 2.5vw;
  height: 5vh;

  @media (min-width: 35rem) {
    font-size: 2vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    padding-right: 20px;
  }
`;

export default function Navbar({}: Props) {
  return (
    <Wrapper>
      <BrandContainer>
        <BrandText>Matías Barrios</BrandText>
      </BrandContainer>
      <BarMenuContainer>
        <NavbarMenu></NavbarMenu>
      </BarMenuContainer>
      <ButtonContainer>
        <Button
          href={'mailto:matias.barriosn@gmail.com?subject="Hello Matías!"'}
          type={'button'}
        >
          Contact me!
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
}
