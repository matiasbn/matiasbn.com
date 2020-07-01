import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavbarBrandText from '@atoms/nb-brand-text';
import NavbarMenu from '@molecules/nb-menu';
import breakpoints from '@utils/breakpoints';
import { useRouter } from 'next/router';
import NavbarHamburgerIcon from '@atoms/nb-hamburger-icon';
import NavbarSocial from '@molecules/nb-social';

type Props = {};

const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  background: #242424;
  display: grid;
  grid-template-columns: 1fr 9fr;
  justify-items: center;
  align-items: center;
  position: relative;

  @media (${breakpoints.tablet.landscape.min}) and (orientation: landscape) {
    grid-template-columns: 1fr 9fr;
  }

  @media (${breakpoints.desktop.landscape.min}) {
    display: grid;
    grid-template-rows: 1fr 10fr;
    grid-template-columns: 1fr;
    width: 5vw;
    height: 100vh;
  }
`;

const ContainerBrand = styled.div`
  justify-self: left;
  padding-left: 10px;
  @media (orientation: landscape) {
    justify-self: center;
    align-self: center;
    padding: 0;
  }
`;

const ContainerHamburguer = styled.div`
  justify-self: right;
  padding-right: 10px;

  @media (${breakpoints.desktop.landscape.min}) {
    display: none;
  }
`;

const ContainerMenu = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default function Navbar({}: Props) {
  const router = useRouter();

  return (
    <Wrapper>
      <ContainerBrand>
        <NavbarBrandText onClick={() => router.push('/index', '/')}>
          MB
        </NavbarBrandText>
      </ContainerBrand>
      <ContainerHamburguer>
        <NavbarHamburgerIcon />
      </ContainerHamburguer>
      <ContainerMenu>
        <NavbarMenu />
        <NavbarSocial />
      </ContainerMenu>
    </Wrapper>
  );
}
