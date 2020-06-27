import React from 'react';
import styled from 'styled-components';
import NavbarBrandText from '@atoms/nb-brand-text';
import NavbarMenu from '@molecules/nb-menu';
import NavbarButton from '@atoms/nb-button';

type Props = {};

const Wrapper = styled.nav`
  width: 100%;
  background: white;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: center;
  align-items: center;
  height: 10vh;

  .contact-button {
    justify-self: end;
    margin-right: 5px;
  }

  @media (min-height: 900px) {
    height: 7vh;
  }

  @media (orientation: landscape) {
    grid-template-columns: 1fr 3fr 1fr;
  }

  @media (min-width: 1920px) {
    grid-template-columns: 1fr 4fr 0.7fr;
  }
`;

export default function Navbar({}: Props) {
  return (
    <Wrapper>
      <NavbarBrandText>Matías Barrios</NavbarBrandText>
      <NavbarMenu />
      <NavbarButton
        href={'mailto:matias.barriosn@gmail.com?subject="Hello Matías!"'}
        type={'button'}
        className={'contact-button'}
      >
        Let's talk!
      </NavbarButton>
    </Wrapper>
  );
}
