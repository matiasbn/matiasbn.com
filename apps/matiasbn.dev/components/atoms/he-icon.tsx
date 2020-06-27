import React from 'react';
import styled from 'styled-components';

const HeroIcon = styled.p<{ color?: string }>`
  margin: 0px;
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: 120px;

  @media (min-height: 500px) {
    font-size: 40vw;
  }

  @media (orientation: landscape) {
    font-size: 50vh;
  }
`;

export default HeroIcon;
