import React from 'react';
import styled from 'styled-components';

const NavbarBrandText = styled.a`
  margin: 0;
  text-align: center;
  font-size: 15px;
  font-family: 'MuseoModerno';

  @media (min-height: 900px) {
    font-size: 25px;
  }
  @media (orientation: landscape) {
    justify-self: start;
    padding-left: 10px;
    font-size: 2vw;
  }
`;

export default NavbarBrandText;
