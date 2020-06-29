import React from 'react';
import styled from 'styled-components';
import NavbarMenuText from '@atoms/nb-menu-text';
import breakpoints from '@utils/breakpoints';

type Props = {};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-columns: auto;
  justify-self: end;
  padding-right: 10px;

  @media (${breakpoints.desktop.min}) {
    padding-right: 10px;
  }

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
