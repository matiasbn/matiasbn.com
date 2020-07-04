import React from 'react';
import styled from 'styled-components';

const DisclaimerTitle = styled.p<{ color?: string }>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : '#282828')};
  font-size: 3rem;
  text-align: center;
`;

export default DisclaimerTitle;
