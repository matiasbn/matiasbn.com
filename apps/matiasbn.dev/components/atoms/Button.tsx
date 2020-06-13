import React from 'react';
import styled from 'styled-components';

const Button = styled.a<{ color?: string }>`
  font-family: 'Comfortaa', cursive;
  background: black;
  border-radius: 5px;
  border: 0;
  min-height: 40px;
  min-width: 150px;
  color: ${(props) => (props.color ? props.color : 'white')};
  display: flex;
  justify-content: center;
  align-items: center;

  :link {
    text-decoration: inherit;
    cursor: auto;
  }

  :visited {
    text-decoration: inherit;
    cursor: auto;
  }
`;

export default Button;
