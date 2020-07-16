import React from 'react';
import styled from 'styled-components';

const TechStackSelectorList = styled.option<{ color?: string }>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: 400000px;
`;

export default TechStackSelectorList;
