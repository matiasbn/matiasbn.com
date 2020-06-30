import React from 'react';
import styled from 'styled-components';

const ResumeHeroTitle = styled.p<{ color?: string }>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : '#282828')};
`;

export default ResumeHeroTitle;
