import React from 'react';
import styled from 'styled-components';
import NavbarText from '@atoms/NavbarText';

type Props = {};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;

const options = ['Home', 'Experience', 'Projects', 'Tech stack'];

export default function NavbarMenu({}: Props) {
  return (
    <Wrapper>
      {options.map((option) => (
        <NavbarText key={option}>{option}</NavbarText>
      ))}
    </Wrapper>
  );
}
