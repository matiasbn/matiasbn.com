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
  text-decoration: none;
  font-size: 3rem;

  img {
    width: 6rem;
  }

  p {
    margin: 0;
    font-size: 1.5rem;
    color: #73f9d9;
  }

  @media (${breakpoints.desktop.min}) {
    img {
      width: 3rem;
    }
    p {
      font-size: 2rem;
      text-align: center;
    }
  }
`;

export default NavbarMenuText;
