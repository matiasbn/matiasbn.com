import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const HeroIcon = styled.p<{ color?: string }>`
  margin: 0;
  line-height: 1;
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: 180px;
  height: fit-content;

  @media (${breakpoints.smallPhonePortrait.max}) {
    font-size: 120px;
  }
  @media (${breakpoints.tabletPortrait}) and (orientation: portrait) {
    font-size: 250px;
  }

  @media (${breakpoints.desktop}) {
    font-size: 300px;
  }

  @media (${breakpoints.desktop}) {
    font-size: 300px;
  }
`;

export default HeroIcon;
