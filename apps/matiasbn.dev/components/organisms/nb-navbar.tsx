import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavbarBrandText from '@atoms/nb-brand-text';
import NavbarMenu from '@molecules/nb-menu';
import breakpoints from '@utils/breakpoints';
import { useRouter } from 'next/router';
import NavbarHamburgerIcon from '@atoms/nb-hamburger-icon';
import NavbarSocial from '@molecules/nb-social';

type Props = {};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #242424;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  position: relative;

  @media (${breakpoints.desktop.min}) {
    display: grid;
    grid-template-rows: 1fr 10fr;
    grid-template-columns: 1fr;
  }
`;

const ContainerBrand = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  padding-left: 1rem;
  justify-self: left;

  @media (${breakpoints.desktop.min}) {
    padding: 0;
    align-items: center;
    justify-items: center;
    justify-self: center;
  }
`;

const ContainerMenu = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (${breakpoints.desktop.min}) {
    height: 100%;
    width: 100%;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

const ContainerHamburguer = styled.div`
  height: 100%;
  display: grid;
  justify-self: right;
  align-items: center;
  padding-right: 1rem;

  @media (${breakpoints.desktop.min}) {
    display: none;
  }
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
