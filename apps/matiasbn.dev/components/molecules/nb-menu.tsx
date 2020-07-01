import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarMenuText from '@atoms/nb-menu-text';
import breakpoints from '@utils/breakpoints';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

const Wrapper = styled.div<{ clicked?: boolean; elements?: number }>`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(${(props) => props.elements}, 1fr);
  background: #262626;
  height: 10vh;
  width: 100%;
  top: 10vh;
  right: ${(props) => (props.clicked ? '0' : '1000px')};
  transition: 0.5s;

  @media (orientation: landscape) {
    top: 16vh;
  }

  @media (${breakpoints.smallPhone.landscape
      .max}) and (orientation: landscape) {
    top: 19vh;
  }

  @media (${breakpoints.tablet.landscape.min}) and (orientation: landscape) {
    top: 10vh;
  }

  @media (${breakpoints.tablet.portrait.min}) and (orientation: portrait) {
    top: 9vh;
  }

  @media (${breakpoints.desktop.landscape.min}) {
    position: initial;
    display: grid;
    grid-template-rows: repeat(${(props) => props.elements - 1}, 6vh);
    gap: 20px;
    grid-template-columns: 1fr;
    height: 100%;

    a:nth-child(5) {
      display: none;
    }
  }
`;

const options = [
  {
    icon: 'person.svg',
    title: 'About me',
    route: '/#',
    //    route: '/techstack',
  },
  {
    icon: 'glasses.svg',
    title: 'Skills',
    route: '/#',
    //    route: '/techstack',
  },
  {
    icon: 'gear.svg',
    title: 'Tech',
    route: '/#',
    //    route: '/techstack',
  },
  {
    icon: 'document.svg',
    title: 'Resume',
    route: '/#',
    //    route: '/resume',
  },
  {
    icon: 'mail.svg',
    title: 'Contact',
    subtitle: "Let's Talk!",
    route: '/#',
    //    route: '/resume',
  },
];

type Props = {};

type Options = typeof options[0];

export default function NavbarMenu({}: Props) {
  const router = useRouter();
  const clicked = useSelector((state) => state.navBarClicked);
  const [selected, setSelected] = useState(null);

  function handleClick(option: Options) {
    const { route, title } = option;
    setSelected(title);
    //    router.push(route);
  }
  return (
    <Wrapper clicked={clicked} elements={options.length}>
      {options.map((option) => (
        <NavbarMenuText key={option.title} onClick={() => handleClick(option)}>
          {selected === option.title ? (
            <p>{option.title}</p>
          ) : (
            <img src={option.icon} title={option.title} />
          )}
        </NavbarMenuText>
      ))}
    </Wrapper>
  );
}
