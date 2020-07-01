import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const HeroIcon = styled.p<{ color?: string }>`
  margin: 0;
  line-height: 1;
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: 180px;
  height: fit-content;

  @media (${breakpoints.smallPhone.landscape
      .max}) and (orientation: landscape) {
    font-size: 120px;
  }
  @media (${breakpoints.tablet.portrait.min}) and (orientation: portrait) {
    font-size: 250px;
  }

  @media (${breakpoints.desktop.portrait.min}) {
    font-size: 300px;
  }

  @media (${breakpoints.desktop.portrait.min}) {
    font-size: 300px;
  }
`;

export default HeroIcon;
