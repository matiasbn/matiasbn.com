import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const NavbarBrandText = styled.a`
  margin: 0;
  text-align: center;
  font-size: 15px;
  font-family: 'MuseoModerno';

  @media (${breakpoints.smallPhone.min}) {
    font-size: 10px;
  }

  @media (${breakpoints.tabletPortrait.min}) {
    font-size: 20px;
  }

  @media (orientation: landscape) {
    justify-self: start;
    padding-left: 10px;
    font-size: 2vw;
  }
`;

export default NavbarBrandText;
