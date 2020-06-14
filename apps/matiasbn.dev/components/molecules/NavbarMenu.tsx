import React from 'react';
import styled from 'styled-components';
import NavbarText from '@atoms/NavbarText';

type Props = {};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//const options = ['Home', 'Experience', 'Projects', 'Tech stack'];
const options = [
  {
    title: 'Resume',
    href:
      'https://drive.google.com/file/d/1szHiZKK7u-pqogYJb2VJDVU08lF_p--6/view?usp=sharing',
  },
];

export default function NavbarMenu({}: Props) {
  return (
    <Wrapper>
      {options.map((option) => (
        <NavbarText key={option.title} href={option.href}>
          {option.title}
        </NavbarText>
      ))}
    </Wrapper>
  );
}
