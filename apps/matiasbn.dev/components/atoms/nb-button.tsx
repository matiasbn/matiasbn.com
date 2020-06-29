import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const NavbarButton = styled.a<{ color?: string; margin?: string }>`
  font-family: 'Comfortaa', cursive;
  background: black;
  border-radius: 5px;
  border: 0;
  color: ${(props) => (props.color ? props.color : 'white')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  height: 20px;
  width: 60px;
  text-align: center;
  text-decoration: inherit;

  @media (${breakpoints.tabletPortrait}) {
    width: 120px;
    height: 30px;
    font-size: 18px;
  }

  @media (${breakpoints.desktop}) {
    font-size: 22px;
    height: 40px;
    width: 125px;
  }

  @media (${breakpoints.desktopWide}) {
    font-size: 30px;
    height: 50px;
    width: 180px;
  }
`;

export default NavbarButton;
