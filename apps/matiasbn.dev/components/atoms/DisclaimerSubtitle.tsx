import React from 'react';
import styled from 'styled-components';

const DisclaimerSubtitle = styled.h1<{
  color?: string;
  rotate?: boolean;
  fontSize?: string;
}>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : 'grey')};
  transform: rotate(${(props) => (props.rotate ? '90deg' : '0deg')});
  font-size: ${(props) => (props.fontSize ? props.fontSize : '40px')};
`;

export default DisclaimerSubtitle;
