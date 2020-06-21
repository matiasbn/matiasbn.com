import React from 'react';
import styled from 'styled-components';

const TechStackNavbarText = styled.p<{ active?: boolean }>`
  margin: 0;
  color: ${(props) => (props.active ? 'white' : 'black')};
  background: ${(props) => (props.active ? 'black' : 'white')};
  text-align: center;
  font-size: 1.2vw;
  width: 100%;
  height: 100%;
  border-top-left-radius: 1em 1em;
  border-top-right-radius: 1em 1em;
  :hover {
    color: grey;
  }
`;

export default TechStackNavbarText;
