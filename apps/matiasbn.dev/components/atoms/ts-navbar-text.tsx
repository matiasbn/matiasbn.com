import React from 'react';
import styled from 'styled-components';

const TechStackNavbarText = styled.a<{ active?: boolean }>`
  margin: 0;
  color: ${(props) => (props.active ? 'white' : '#282828')};
  text-align: center;
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
  border-top-left-radius: 1em 1em;
  border-top-right-radius: 1em 1em;
  cursor: pointer;
  z-index: 1;
  position: relative;
  :hover {
    color: grey;
  }
`;

export default TechStackNavbarText;
