import React from 'react';
import styled from 'styled-components';

const TechStackIntroTitle = styled.p<{ color?: string }>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: 4rem;
`;

export default TechStackIntroTitle;
