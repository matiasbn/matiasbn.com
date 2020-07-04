import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const HeroTextSubtitle = styled.p<{ color?: string }>`
  margin: 0rem;
  color: ${(props) => (props.color ? props.color : 'white')};
  text-align: center;
  font-size: 1.5rem;
  opacity: 0;
  animation: opacity-animation 3s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;

  @media (${breakpoints.desktop.min}) {
    font-size: 2rem;
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

export default HeroTextSubtitle;
