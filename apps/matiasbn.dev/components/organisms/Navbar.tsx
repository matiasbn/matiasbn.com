import React from 'react';
import styled from 'styled-components';
import BrandText from '@atoms/BrandText';
import NavbarMenu from '@molecules/NavbarMenu';
import Button from '@atoms/Button';
import { breakpoints } from '@matiasbn.dev/utils';

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
  font-size: 0.5rem;
`;

const BarMenuContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

const ButtonContainer = styled.div`
  font-size: 0.5rem;
  height: 5vh;
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
