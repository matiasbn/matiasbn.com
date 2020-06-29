import React from 'react';
import styled from 'styled-components';
import NavbarBrandText from '@atoms/nb-brand-text';
import NavbarMenu from '@molecules/nb-menu';
import NavbarButton from '@atoms/nb-button';
import breakpoints from '@utils/breakpoints';

type Props = {};

const Wrapper = styled.nav`
  width: 100%;
  background: white;
  display: grid;
  grid-template-columns: 3fr 5fr 1fr;
  justify-items: center;
  align-items: center;
  height: 5vh;

  .contact-button {
    justify-self: end;
    margin-right: 5px;
  }

  @media (${breakpoints.desktop.min}) {
    grid-template-columns: 2fr 5fr 1fr;
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
