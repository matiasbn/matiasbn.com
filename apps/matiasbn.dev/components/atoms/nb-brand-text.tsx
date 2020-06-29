import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const NavbarBrandText = styled.a`
  margin: 0;
  text-align: center;
  font-size: 15px;
  font-family: 'MuseoModerno';

  @media (${breakpoints.smallPhone}) {
    font-size: 10px;
  }

  @media (orientation: landscape) {
    justify-self: start;
    padding-left: 10px;
    font-size: 2vw;
  }

  @media (${breakpoints.tabletPortrait}) {
    font-size: 25px;
  }

  @media (${breakpoints.desktopWide}) {
    font-size: 40px;
  }
`;

export default NavbarBrandText;
