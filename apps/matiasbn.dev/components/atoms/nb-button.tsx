import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const NavbarButton = styled.a`
  font-family: 'Comfortaa', cursive;
  background: brown;
  border-radius: 5px;
  border: 0;
  font-size: 2vh;
  height: 4vh;
  text-align: center;
  line-height: 5vh;
  align-self: center;

  @media (orientation: landscape) {
    font-size: 2vw;
    height: 4vw;
    line-height: 4vw;
  }
`;

export default NavbarButton;
