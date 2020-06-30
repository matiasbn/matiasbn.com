import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const HeroTitle = styled.p<{ color?: string }>`
  margin: 0px;
  color: ${(props) => (props.color ? props.color : 'white')};
  text-align: left;
  font-size: 40px;
  padding: 5px;
  animation: opacity-animation 2s;

  @media (${breakpoints.tabletPortrait}) and (orientation: portrait) {
    font-size: 80px;
  }

  @media (${breakpoints.desktop}) {
    font-size: 80px;
  }

  @media (${breakpoints.smallPhonePortrait.max}) {
    font-size: 35px;
  }

  @media (orientation: portrait) {
    text-align: center;
    font-size: 40px;
    animation: opacity-animation 2s;
    animation-fill-mode: forwards;
  }

  @keyframes opacity-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }
`;

export default HeroTitle;
