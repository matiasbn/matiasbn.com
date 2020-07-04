import React from 'react';
import styled from 'styled-components';

const NavbarSocialIcon = styled.a<{ color?: string }>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : 'white')};
  height: 30px;
  font-size: 30px;
  display: grid;
  svg {
    height: 30px;
    width: 30px;
  }
`;

export default NavbarSocialIcon;
