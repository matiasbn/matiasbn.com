import React from 'react';
import styled from 'styled-components';

const TechStackSecondaryNavbarText = styled.p<{ active?: boolean }>`
  margin: 0;
  color: ${(props) => (props.active ? 'white' : 'black')};
  background: ${(props) => (props.active ? 'black' : 'white')};
  text-align: center;
  font-size: 1.2vw;
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 1em 1em;
  border-bottom-right-radius: 1em 1em;
  :hover {
    color: grey;
  }
`;

export default TechStackSecondaryNavbarText;
