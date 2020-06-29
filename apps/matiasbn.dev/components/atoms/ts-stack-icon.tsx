import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '@utils/breakpoints';

const TechStackIcon = styled.img<{ color?: string }>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : 'white')};
  transition: width 0.1s ease-out;
  width: 25px;
  &:hover {
    width: 25px;
    transition: width 0.1s ease-in;
  }
  @media (${breakpoints.desktop}) {
    width: 60px;

    &:hover {
      width: 70px;
      transition: width 0.1s ease-in;
    }
  }
`;

export default TechStackIcon;
