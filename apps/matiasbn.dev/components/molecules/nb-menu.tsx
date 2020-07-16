import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarMenuText from '@atoms/nb-menu-text';
import breakpoints from '@utils/breakpoints';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import {
  faUser,
  faKeyboard,
  faFileCode,
  faComment,
} from '@fortawesome/free-regular-svg-icons';
import { ActionTypes } from '@store';
import { MenuOptions } from '@utils/enums';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavbarOption } from '@utils/interfaces';

const Wrapper = styled.div<{ clicked?: boolean; elements?: number }>`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(${(props) => props.elements}, 1fr);
  background: #262626;
  height: 7rem;
  top: 10vh;
  width: 100%;
  right: ${(props) => (props.clicked ? '0' : '100%')};
  transition-duration: 1s;
  transition-timing-function: cubic-bezier();

  @media (${breakpoints.desktop.min}) {
    position: initial;
    display: grid;
    grid-template-rows: repeat(${(props) => props.elements - 1}, 10vh);
    gap: 2rem;
    grid-template-columns: 1fr;
    height: 100%;
    width: 100%;

    a:nth-child(4) {
      display: none;
    }
  }
`;

const options: NavbarOption[] = [
  {
    icon: faUser,
    title: 'About',
    route: '/#',
    option: MenuOptions.ABOUT,
    //    route: '/techstack',
  },
  {
    icon: faFileCode,
    title: 'Skills',
    route: '/#',
    option: MenuOptions.SKILLS,
    //    route: '/techstack',
  },
  {
    icon: faKeyboard,
    title: 'Tools',
    route: '/techstack',
    option: MenuOptions.TECH,
    //    route: '/techstack',
  },
  {
    icon: faComment,
    title: "Let's talk!",
    option: MenuOptions.CONTACT,
    route: '/#',
    //    route: '/resume',
  },
];

type Props = {};

type Options = typeof options[0];

export default function NavbarMenu({}: Props) {
  const router = useRouter();
  const clicked = useSelector((state) => state.navBarClicked);
  const selected = useSelector((state) => state.menuOption);
  const [hovered, setHovered] = useState('');

  const dispatch = useDispatch();
  function handleClick(opt: Options) {
    const { route, option } = opt;
    dispatch({
      type: ActionTypes.SET_MENU_OPTION,
      payload: option === selected ? MenuOptions.NONE : option,
    });
    router.push(route);
  }

  return (
    <Wrapper clicked={clicked} elements={options.length}>
      {options.map((option) => (
        <NavbarMenuText
          key={option.title}
          onClick={() => handleClick(option)}
          onMouseEnter={() => setHovered(option.option)}
          onMouseLeave={() => setHovered('')}
          hover={hovered === option.option}
        >
          <p>{option.title}</p>
          <div>
            <FontAwesomeIcon
              icon={option.icon}
              style={{
                color: selected === option.option ? '#73f9d9' : 'white',
              }}
            />
          </div>
        </NavbarMenuText>
      ))}
    </Wrapper>
  );
}
