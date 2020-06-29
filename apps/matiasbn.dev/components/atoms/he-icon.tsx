import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const HeroIcon = styled.p<{ color?: string }>`
  margin: 0;
  line-height: 1;
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: 180px;
  height: fit-content;

  @media (${breakpoints.tabletPortrait.min}) {
    font-size: 250px;
  }

  @media (${breakpoints.desktop.min}) {
    font-size: 120px;
  }
`;

export default HeroIcon;
