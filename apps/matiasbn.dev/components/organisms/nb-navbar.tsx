import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavbarBrandText from '@atoms/nb-brand-text';
import NavbarMenu from '@molecules/nb-menu';
import NavbarButton from '@atoms/nb-button';
import breakpoints from '@utils/breakpoints';
import { useRouter } from 'next/router';
import NavbarHamburgerIcon from '@atoms/nb-hamburger-icon';
import { debuglog, log } from 'util';
import NavbarSocial from '@molecules/nb-social';

type Props = {};

const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  background: #242424;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  position: relative;

  .contact-button {
    justify-self: end;
    margin-right: 5px;
  }

  @media (orientation: landscape) {
    display: grid;
    grid-template-rows: 1fr 10fr;
    grid-template-columns: auto;
  }

  @media (${breakpoints.tabletLandscape}) {
  }

  @media (${breakpoints.smallPhonePortrait.max}) {
  }
`;

const ContainerBrand = styled.div`
  justify-self: left;
  padding-left: 10px;
`;

const ContainerHamburguer = styled.div`
  justify-self: right;
  padding-right: 10px;
  @media (orientation: landscape) {
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
      {/*<NavbarButton*/}
      {/*  */}
      {/*  type={'button'}*/}
      {/*  className={'contact-button'}*/}
      {/*></NavbarButton>*/}
      <ContainerHamburguer>
        <NavbarHamburgerIcon />
      </ContainerHamburguer>
      <NavbarMenu />
      <NavbarSocial />
    </Wrapper>
  );
}
