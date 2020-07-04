import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const HeroIconText = styled.p<{ color?: string }>`
  margin: 0;
  line-height: 1;
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: 12rem;
  height: fit-content;

  @media (${breakpoints.desktop.min}) {
    font-size: 12rem;
  }
`;

export default HeroIconText;
