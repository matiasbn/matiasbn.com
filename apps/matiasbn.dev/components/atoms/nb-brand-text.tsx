import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const NavbarBrandText = styled.p`
  margin: 0;
  line-height: 1;
  font-size: 3rem;
  cursor: pointer;
  color: #73f9d9;

  @media (${breakpoints.desktop.min}) {
    font-size: 3rem;
  }
`;

export default NavbarBrandText;
