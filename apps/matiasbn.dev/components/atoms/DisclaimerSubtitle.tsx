import React from 'react';
import styled from 'styled-components';

const DisclaimerSubtitle = styled.p<{ color?: string }>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : 'grey')};
  font-size: 4vw;
  text-align: center;
`;

export default DisclaimerSubtitle;
