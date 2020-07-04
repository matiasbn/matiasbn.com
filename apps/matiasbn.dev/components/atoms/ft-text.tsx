import React from 'react';
import styled from 'styled-components';

const FooterText = styled.p<{ color?: string }>`
  margin: 0rem;
  color: ${(props) => (props.color ? props.color : 'grey')};
`;

export default FooterText;
