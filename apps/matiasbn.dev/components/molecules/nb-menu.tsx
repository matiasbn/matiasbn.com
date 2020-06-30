import React from 'react';
import styled from 'styled-components';
import NavbarMenuText from '@atoms/nb-menu-text';
import breakpoints from '@utils/breakpoints';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
type Props = {};

const Wrapper = styled.div<{ clicked?: boolean; elements?: number }>`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #262626;
  height: 5vh;
  width: 100%;
  top: 10vh;
  float: right;
  right: ${(props) => (props.clicked ? '0' : '1000px')};
  transition: 0.5s;

  @media (${breakpoints.tabletPortrait}) and (orientation: portrait) {
    right: ${(props) => (props.clicked ? '0' : '1000px')};
  }

  @media (${breakpoints.desktop}) {
    padding-right: 10px;
  }

  @media (orientation: landscape) {
    display: grid;
    position: relative;
    grid-template-rows: repeat(${(props) => props.elements}, 1fr);
    grid-template-columns: 1fr;
    right: initial;
    top: initial;
    height: 60%;
  }
`;

//const options = ['Home', 'Experience', 'Projects', 'Tech stack'];
const options = [
  {
    icon: 'document.png',
    title: 'Resume',
    route: '/resume',
  },
  {
    icon: 'techstack.png',
    title: 'Techstack',
    route: '/techstack',
  },
];

export default function NavbarMenu({}: Props) {
  const router = useRouter();
  const clicked = useSelector((state) => state.navBarClicked);
  return (
    <Wrapper clicked={clicked} elements={options.length}>
      {options.map((option) => (
        <NavbarMenuText
          key={option.title}
          onClick={() => router.push(option.route)}
        >
          <img src={option.icon} width={'10vh'} title={option.title} />{' '}
          <p>{option.title}</p>
        </NavbarMenuText>
      ))}
    </Wrapper>
  );
}
