import React from 'react';
import styled from 'styled-components';

const Button = styled.a<{ color?: string }>`
  font-family: 'Comfortaa', cursive;
  background: black;
  border-radius: 5px;
  border: 0;
  color: ${(props) => (props.color ? props.color : 'white')};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 5vh;
  min-width: 20vw;
  text-align: center;

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
