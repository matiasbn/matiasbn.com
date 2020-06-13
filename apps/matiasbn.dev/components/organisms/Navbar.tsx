import React from 'react';
import styled from 'styled-components';
import BrandText from '@atoms/BrandText';
import NavbarMenu from '@molecules/NavbarMenu';
import Button from '@atoms/Button';

type Props = {};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 50% 10%;
  height: 100px;
`;

const BandContainer = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
`;

const BarMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export default function Navbar({}: Props) {
  return (
    <Wrapper>
      <BandContainer>
        <BrandText>Matías Barrios</BrandText>
      </BandContainer>
      <BarMenuContainer>
        <NavbarMenu></NavbarMenu>
      </BarMenuContainer>
      <ButtonContainer>
        <Button>Contact me!</Button>
      </ButtonContainer>
    </Wrapper>
  );
}
