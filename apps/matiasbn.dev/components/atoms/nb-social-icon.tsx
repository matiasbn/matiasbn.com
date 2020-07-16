import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const NavbarSocialIcon = styled.a<{ color?: string }>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: 3rem;
  display: grid;

  @media (${breakpoints.desktop.min}) {
    font-size: 2rem;
  }
`;

export default NavbarSocialIcon;
