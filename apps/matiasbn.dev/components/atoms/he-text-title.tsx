import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const HeroTextTitle = styled.p<{ color?: string }>`
  margin: 0rem;
  color: ${(props) => (props.color ? props.color : 'white')};
  text-align: left;
  font-size: 4rem;
  animation: opacity-animation 2s;

  @media (${breakpoints.desktop.min}) {
    font-size: 8rem;
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

export default HeroTextTitle;
