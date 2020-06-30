import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const NavbarButton = styled.a<{ color?: string; margin?: string }>`
  font-family: 'Comfortaa', cursive;
  background: #282828;
  border-radius: 5px;
  border: 0;
  color: ${(props) => (props.color ? props.color : 'white')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  height: 30px;
  text-align: center;
  text-decoration: inherit;

  @media (${breakpoints.tabletPortrait}) and (orientation: portrait) {
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
    font-size: 25px;
    height: 40px;
    width: 160px;
  }

  @media (${breakpoints.smallPhone}) {
    font-size: 25px;
    height: 40px;
    width: 160px;
  }
`;

export default NavbarButton;
