import React from 'react';
import styled from 'styled-components';

const DisclaimerTitle = styled.p<{ color?: string }>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : 'black')};
  font-size: 3vw;
  text-align: center;
`;

export default DisclaimerTitle;
