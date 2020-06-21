import React from 'react';
import styled from 'styled-components';
import NavbarMenuText from '@atoms/NavbarMenuText';

type Props = {};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-columns: auto;

  @media (orientation: landscape) {
    justify-self: end;
  }
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
        <NavbarMenuText key={option.title} href={option.href}>
          {option.title}
        </NavbarMenuText>
      ))}
    </Wrapper>
  );
}
