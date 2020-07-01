import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const NavbarBrandText = styled.a`
  margin: 0;
  text-align: center;
  font-size: 5vh;
  cursor: pointer;
  height: 100%;
  width: 100%;
  color: #73f9d9;

  @media (orientation: landscape) {
    font-size: 5vw;
  }

  @media (${breakpoints.smallPhone.portrait.max}) {
    font-size: 25px;
  }

  @media (${breakpoints.tablet.landscape.min}) and (orientation: portrait) {
    font-size: 5vh;
  }

  @media (${breakpoints.desktop.landscape.min}) {
    font-size: 2vw;
  }
`;

export default NavbarBrandText;
