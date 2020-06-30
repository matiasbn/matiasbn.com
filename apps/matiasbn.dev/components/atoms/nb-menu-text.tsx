import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const NavbarMenuText = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Comfortaa', cursive;
  cursor: pointer;
  color: white;
  font-size: 10px;
  text-decoration: none;
  :link {
    text-decoration: inherit;
    color: inherit;
  }

  :visited {
    text-decoration: inherit;
    color: inherit;
  }
  @media (${breakpoints.tabletPortrait}) {
    font-size: 20px;
  }
  @media (orientation: landscape) {
    p {
      display: none;
    }
    img {
      width: 20px;
    }
  }
  @media (${breakpoints.desktopWide}) {
    font-size: 20px;
  }
`;

export default NavbarMenuText;
