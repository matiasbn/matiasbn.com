import React from 'react';
import styled from 'styled-components';

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
  height: 7vh;
  width: 20vw;
  text-align: center;

  :link {
    text-decoration: inherit;
  }

  :visited {
    text-decoration: inherit;
  }

  @media (min-height: 900px) {
    height: 5vh;
    font-size: 20px;
  }

  @media (orientation: landscape) {
    font-size: 1.2vw;
    width: 15vw;
  }

  @media (min-width: 1920px) {
    font-size: 1vw;
    width: 10vw;
  }
`;

export default NavbarButton;
