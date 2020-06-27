import React from 'react';
import styled from 'styled-components';

const TechStackIcon = styled.img<{ color?: string }>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : 'white')};
  width: 60px;
  transition: width 0.1s ease-out;

  &:hover {
    width: 70px;
    transition: width 0.1s ease-in;
  }

  @keyframes augment {
    from {
      width: 60px;
    }
    to {
      width: 80px;
    }
  }

  @keyframes small {
    from {
      width: 80px;
    }
    to {
      width: 60px;
    }
  }
`;

export default TechStackIcon;
