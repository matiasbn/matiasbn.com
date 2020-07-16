import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const NavbarMenuText = styled.a<{ hover: boolean }>`
  display: grid;
  justify-items: center;
  align-items: center;
  font-family: 'Comfortaa', cursive;
  cursor: pointer;
  color: white;
  text-decoration: none;
  font-size: 3rem;
  position: relative;
  overflow: hidden;

  p {
    position: absolute;
    margin: 0;
    opacity: ${(props) => (!props.hover ? '0' : 100)};
    transition: 0.5s;
    font-size: 1.5rem;
    color: #73f9d9;
  }

  div {
    position: absolute;
    color: green;
    top: ${(props) => (!props.hover ? '2rem' : '10rem')};
    transition: 0.5s;
    text-align: center;
  }

  @media (${breakpoints.desktop.min}) {
    p {
      position: absolute;
      font-size: 1.5rem;
      text-align: center;
      opacity: ${(props) => (!props.hover ? 0 : 100)};
    }

    div {
      position: absolute;
      font-size: 3rem;
      width: 3rem;
      top: initial;
      opacity: ${(props) => (!props.hover ? 100 : 0)};
    }
  }
`;

export default NavbarMenuText;
