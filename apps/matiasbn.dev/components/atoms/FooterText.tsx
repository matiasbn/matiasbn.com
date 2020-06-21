import React from 'react';
import styled from 'styled-components';

const FooterText = styled.p<{ color?: string }>`
  margin: 0px;
  color: ${(props) => (props.color ? props.color : 'grey')};

  @media (orientation: landscape) {
    font-size: 1vw;
  }
`;

export default FooterText;
