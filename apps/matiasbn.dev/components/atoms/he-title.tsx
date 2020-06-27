import React from 'react';
import styled from 'styled-components';

const HeroTitle = styled.p<{ color?: string }>`
  margin: 0px;
  color: ${(props) => (props.color ? props.color : 'white')};
  text-align: center;
  font-size: 30px;
  padding: 5px;

  @media (orientation: landscape) {
    font-size: 5vw;
  }

  @media (min-height: 900px) {
    font-size: 50px;
  }

  @media (min-width: 1920px) {
    font-size: 5vw;
  }
`;

export default HeroTitle;
