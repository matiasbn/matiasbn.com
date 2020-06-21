import React from 'react';
import styled from 'styled-components';

const NavbarMenuText = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Comfortaa', cursive;
  cursor: pointer;

  @media (orientation: landscape) {
    font-size: 2vw;
  }
  @media (min-height: 900px) and not(orientation: landscape) {
    font-size: 20px;
  }

  @media (min-width: 1920px) {
    font-size: 1.5vw;
  }

  :link {
    text-decoration: inherit;
    color: inherit;
  }

  :visited {
    text-decoration: inherit;
    color: inherit;
  }
`;

export default NavbarMenuText;
