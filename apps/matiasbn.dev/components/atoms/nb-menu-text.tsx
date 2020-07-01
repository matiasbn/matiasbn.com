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

  img {
    width: 6vh;
  }

  p {
    margin: 0;
    font-size: 10px;
    color: #73f9d9;
  }
  @media (orientation: landscape) {
    img {
      width: 8vh;
    }

    p {
      margin: 0;
      font-size: 15px;
      color: #73f9d9;
    }
  }

  @media (${breakpoints.smallPhone.landscape
      .max}) and (orientation: landscape) {
    img {
      width: 5vw;
    }
    p {
      font-size: 3vw;
    }
  }

  @media (${breakpoints.tablet.portrait.min}) and (orientation: portrait) {
    font-size: 20px;
    p {
      font-size: 3vh;
    }
  }

  @media (${breakpoints.tablet.landscape.min}) and (orientation: landscape) {
    img {
      width: 5vw;
    }
    p {
      font-size: 2vw;
    }
  }

  @media (${breakpoints.desktop.landscape.min}) {
    img {
      width: 3vw;
    }
    p {
      font-size: 2vh;
      text-align: center;
    }
  }
`;

export default NavbarMenuText;