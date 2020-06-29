import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const HeroSubtitle = styled.p<{ color?: string }>`
  margin: 0px;
  color: ${(props) => (props.color ? props.color : 'white')};
  text-align: left;
  font-size: 10px;
  padding: 5px;
  opacity: 0;
  animation: opacity-animation 3s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;

  @media (orientation: portrait) {
    text-align: center;
    font-size: 10px;
    animation: opacity-animation 2s;
    animation-fill-mode: forwards;
  }

  @media (${breakpoints.tabletPortrait}) {
    font-size: 20px;
  }

  @media (${breakpoints.desktop}) {
    font-size: 20px;
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

export default HeroSubtitle;
