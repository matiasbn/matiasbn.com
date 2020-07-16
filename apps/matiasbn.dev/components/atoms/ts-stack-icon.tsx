import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '@utils/breakpoints';

const TechStackIcon = styled.img<{ color?: string }>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : 'white')};
  transition: width 0.1s ease-out;
  width: 2rem;
  &:hover {
    width: 2rem;
    transition: width 0.1s ease-in;
  }
  @media (${breakpoints.desktop.min}) {
    width: 60rem;

    &:hover {
      width: 7rem;
      transition: width 0.1s ease-in;
    }
  }
`;

export default TechStackIcon;
