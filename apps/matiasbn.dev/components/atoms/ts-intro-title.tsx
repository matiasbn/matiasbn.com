import React from 'react';
import styled from 'styled-components';

const TechStackIntroTitle = styled.p<{ color?: string }>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : 'black')};
  font-size: 5vw;
`;

export default TechStackIntroTitle;
