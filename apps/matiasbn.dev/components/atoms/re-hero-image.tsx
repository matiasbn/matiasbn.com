import React from 'react';
import styled from 'styled-components';

const ResumeHeroImage = styled.div<{ color?: string }>`
  margin: 0;
  background-image: url('https://obsonebo.sirv.com/Images/resume-img.png');
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -70px;
  width: 100%;
  height: 90vh;
`;

export default ResumeHeroImage;
