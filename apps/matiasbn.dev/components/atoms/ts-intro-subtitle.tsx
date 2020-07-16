import React from 'react';
import styled from 'styled-components';

const TechStackIntroSubttile = styled.p<{ color?: string }>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : 'grey')};
  font-size: 1.5rem;
`;

export default TechStackIntroSubttile;
