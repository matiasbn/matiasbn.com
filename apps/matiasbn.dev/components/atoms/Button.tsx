import React from 'react';
import styled from 'styled-components';

const Button = styled.button<{ color?: string }>`
  font-family: 'Comfortaa', cursive;
  background: #2a82ff;
  border-radius: 5px;
  border: 0;
  min-height: 40px;
  min-width: 150px;
  color: ${(props) => (props.color ? props.color : 'white')};
`;

export default Button;
