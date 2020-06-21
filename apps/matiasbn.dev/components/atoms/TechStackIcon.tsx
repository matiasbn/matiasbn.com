import React from 'react';
import styled from 'styled-components';

const TechStackIcon = styled.img<{ color?: string }>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : 'white')};
  width: 5vw;
`;

export default TechStackIcon;
