import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const NavbarMenuText = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Comfortaa', cursive;
  cursor: pointer;
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
  @media (${breakpoints.desktop.min}) {
    font-size: 20px;
  }
`;

export default NavbarMenuText;
